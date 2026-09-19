// mi service worker: antes tenía la caché por delante de la red (v1), luego lo cambié a
// red primero (v2) — pero se me quedó un fallo: si la red fallaba en algo que nunca había
// guardado, devolvía "nada" en vez de una respuesta válida, y eso rompía el service worker
// entero con un error de consola. Lo arreglo asegurándome de devolver SIEMPRE algo válido,
// y de paso dejo de tocar peticiones a webs externas (Firebase, fuentes, Three.js) — esas
// las dejo pasar tal cual, sin meterme; solo gestiono caché de mis propios archivos.
const CACHE_NAME = 'bytemon-cache-v3'; // subo el número otra vez, para forzar que se borre la v2 rota
const APP_SHELL = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(()=> self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // solo gestiono peticiones a mi propio sitio; todo lo externo (Firebase, fuentes, Three.js
  // desde su CDN) lo dejo pasar sin tocar, tal cual lo maneja el navegador por su cuenta
  let sameOrigin = false;
  try{ sameOrigin = new URL(event.request.url).origin === self.location.origin; }catch(e){}
  if(!sameOrigin) return;

  event.respondWith(
    fetch(event.request)
      .then((fresh) => {
        const copy = fresh.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(()=>{});
        return fresh;
      })
      .catch(async () => {
        // sin conexión: uso lo guardado si lo tengo, y si no, devuelvo algo válido igualmente
        // (nunca "nada", que es justo lo que rompía esto antes)
        const cached = await caches.match(event.request);
        return cached || new Response('Sin conexión y sin copia guardada de esto.', { status: 503, statusText: 'Offline' });
      })
  );
});

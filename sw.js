// mi service worker: antes tenía la caché por delante de la red, y eso hacía que el móvil
// se quedara pegado a una copia vieja de la app aunque yo subiera cambios nuevos — lo cambio
// para que primero intente traer la versión más reciente de internet, y solo use lo guardado
// si no hay conexión. Así nunca me quedo viendo una versión antigua por error.
const CACHE_NAME = 'bytemon-cache-v2'; // subo el número a propósito: esto borra cualquier caché vieja que tuviera guardada
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
  // dejo pasar las llamadas a Firebase/Firestore tal cual, sin tocar caché, para no romper los datos en vivo
  if (event.request.url.includes('firestore.googleapis.com') || event.request.url.includes('googleapis.com')) {
    return;
  }
  // red primero: si hay conexión, siempre me trae lo último y actualiza la copia guardada;
  // solo si falla (sin conexión) uso lo que tuviera guardado de antes
  event.respondWith(
    fetch(event.request)
      .then((fresh) => {
        const copy = fresh.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(()=>{});
        return fresh;
      })
      .catch(() => caches.match(event.request))
  );
});

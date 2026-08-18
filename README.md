# BYTEMON 🥚

Mi mascota virtual. La empecé como un Tamagotchi cualquiera y se me fue de las manos —
ahora tiene mazmorra, arena online, árbol evolutivo, y hasta modelos 3D generados a partir
de los mismos rasgos que antes dibujaba en pixel art. Todo hecho en un único archivo HTML,
sin frameworks, sin build, sin nada que instalar para trastear con el código.

## Qué hace

- Tienes un huevo, lo cuidas (comida, juego, limpieza, sueño) y evoluciona.
- Al llegar a "Joven" no te la asigna el sistema: te enseña 3 formas distintas generadas
  al azar (color, forma de cuerpo, rasgo, ojos, patrón...) y eliges tú cuál te gusta más.
  Prácticamente nunca te va a tocar la misma combinación que a otra persona.
- Mazmorra: combates PvE contra monstruos generados por piso, subes de nivel de verdad
  (stats de RPG: ataque, defensa, magia, resistencia, velocidad).
- Arena: combates locales (dos mascotas en el mismo móvil) y online (contra el bicho de
  otra persona, en tiempo real, vía Firebase).
- Minijuegos para subir el ánimo sin depender de pelear.
- Vista 3D de verdad (Three.js) para la mascota, la mazmorra y el árbol evolutivo — con
  expresión que cambia según si está feliz, con hambre, cansada, enferma o dormida.
- Funciona como PWA instalable (se puede convertir en APK con PWABuilder) y guarda los
  datos en Firebase si lo saco de aquí, o en el almacenamiento propio si lo pruebo dentro
  de Claude.

## Archivos

- `index.html` — todo el juego. Un solo archivo, HTML+CSS+JS metidos dentro.
- `manifest.json` — para que se pueda instalar como app.
- `sw.js` — el service worker, para que funcione offline y cuente como PWA de verdad.
- `icons/` — los iconos de la app en varios tamaños.

## Si lo subo fuera de Claude

Dentro de Claude no hay que tocar nada, usa su propio almacenamiento por usuario.
Si lo alojo en mi propio hosting (lo tengo en GitHub Pages), necesito:

1. Un proyecto gratis en [Firebase](https://console.firebase.google.com) (el mío se llama "vpet")
2. Activar Authentication → Sign-in method → Anónimo
3. Firestore en modo producción con mis reglas (cada usuario solo ve lo suyo; lo
   compartido — arena, ranking — lo puede leer y escribir cualquiera con sesión anónima)
4. Pegar mi configuración de Firebase en la constante `FIREBASE_CONFIG`, arriba del todo
5. Subir `index.html`, `manifest.json`, `sw.js` y la carpeta `icons/` todos juntos, en la
   raíz del repo — nada de subcarpetas para el manifest, que ya me la lié una vez con eso

Todas las notas completas están al final del propio `index.html`, en un comentario.

## Convertirlo en APK

Con la web ya subida y el manifest funcionando, uso [PWABuilder](https://www.pwabuilder.com):
pego mi URL, le doy a Android, y me genera el `.apk` para instalar directo en el móvil.

## Por qué está todo en un archivo

Porque así lo puedo pegar entero en el chat sin líos de carpetas ni de build, y porque
así empecé y ya no le veo sentido a complicarlo ahora.

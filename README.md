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

## Archivos

- `index.html` — todo el juego. HTML, CSS y JS metidos en un único archivo, sin build.
- `manifest.json` — nombre, colores e iconos de la app. Es lo que hace que "Añadir a
  pantalla de inicio" cree un acceso directo de verdad, con mi icono y sin la barra del
  navegador, en vez de un marcador cualquiera.
- `sw.js` — el service worker. Necesario para que el manifest cuente como instalable de
  verdad y para que la app abra aunque no haya conexión.
- `icons/` — los iconos en varios tamaños, para que se vean bien en cualquier móvil.

No hay ningún botón mío de "instalar" en la web — lo quité a propósito. El acceso directo
se crea con la opción que ya trae el propio navegador (ver más abajo).

## Si lo subo fuera de Claude

Dentro de Claude no hay que tocar nada, usa su propio almacenamiento por usuario.
Si lo alojo en mi propio hosting, necesito:

1. Un proyecto gratis en [Firebase](https://console.firebase.google.com) (el mío se llama "vpet")
2. Activar Authentication → Sign-in method → Anónimo
3. Firestore en modo producción con mis reglas (cada usuario solo ve lo suyo; lo
   compartido — arena, ranking — lo puede leer y escribir cualquiera con sesión anónima)
4. Pegar mi configuración de Firebase en la constante `FIREBASE_CONFIG`, arriba del todo
5. Subir `index.html`, `manifest.json`, `sw.js` y la carpeta `icons/` todos juntos, en la
   raíz de mi hosting (GitHub Pages, Netlify, lo que sea) — nada de subcarpetas para el
   manifest, que ya me la lié una vez con eso

Todas las notas completas están al final del propio `index.html`, en un comentario.

## Acceso directo en el móvil

No hace falta ningún botón mío para esto — entro a la web ya subida, abro el menú del
navegador (los tres puntos), y toco **"Añadir a pantalla de inicio"** (o "Instalar app",
según el navegador). Gracias al manifest y al service worker, esto no crea un simple
marcador: crea un acceso directo de verdad, con mi icono, que abre la app a pantalla
completa, sin la barra de direcciones del navegador.

## Por qué está todo en un archivo

Porque así lo puedo pegar entero en el chat sin líos de carpetas ni de build, y porque
así empecé y ya no le veo sentido a complicarlo ahora.

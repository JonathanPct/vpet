# BYTEMON

Empezó como un Tamagotchi cualquiera de un rato libre y se me fue de las manos. Ahora
tiene mazmorra, arena online, árbol evolutivo con elección real, y hasta modelos 3D
generados a partir de los mismos rasgos que antes dibujaba pixel a pixel. Sigue siendo
un único `index.html` — sin frameworks, sin build, se abre y ya está.

Nace un huevo, lo cuidas (comida, juego, limpieza, sueño), y al llegar a "Joven" no
decido yo la forma final: te enseño 3 opciones generadas al azar y eliges. Con el color,
el cuerpo, el rasgo y el patrón mezclados, difícil que le toque lo mismo a dos personas.

De ahí para arriba: mazmorra con monstruos por piso y stats de RPG de verdad, arena para
pelear local u online contra el bicho de otro en tiempo real, minijuegos para subir el
ánimo sin pelear, y vista 3D de la mascota y la mazmorra que cambia de expresión según
cómo esté — feliz, con hambre, cansada, enferma, dormida.

## Archivos

`index.html` es el juego entero. `manifest.json` y `sw.js` son para que se pueda
instalar como app de verdad. `icons/` trae los tamaños que pide el manifest.

Si lo subo a otro hosting, la configuración de Firebase (proyecto, reglas, todo) va
anotada al final del propio `index.html`, en un comentario.

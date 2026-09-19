# BYTEMON

Empezó como un Tamagotchi cualquiera de un rato libre y se me fue de las manos. Todo
en pixel art, dibujado a mano con bloques — sin 3D, sin frameworks, sin build. Un único
`index.html`, se abre y ya está.

Nace un huevo, lo cuidas (comida, juego, limpieza, sueño), y en **cada** etapa de su
vida — al nacer, al crecer, y en cada evolución hasta la forma final — te enseño tres
opciones generadas al azar y eliges tú. Con el color, la raza, el rasgo y el patrón
mezclados, difícil que le toque lo mismo a dos personas.

Desde la evolución grande en adelante puede tocarle una de cinco razas (animal, mítica,
humanoide, insecto, y variantes de cada una — más de veinte tipos distintos en total,
desde un lobo o un dragón hasta un minotauro, una sirena o un kraken), cada una con sus
propios rasgos pegados a la misma base fiable, sin patas ni brazos sueltos que se
desconecten del cuerpo.

De ahí para arriba: mazmorra con monstruos por piso y stats de RPG de verdad, arena
para pelear local u online contra el bicho de otro en tiempo real, minijuegos para
subir el ánimo sin pelear, y un compañero con el que se puede hablar de verdad — con
memoria de lo que le has contado en la misma charla, y una decena de temas distintos
que van cambiando según por dónde va la conversación.

## Archivos

`index.html` es el juego entero. `manifest.json` y `sw.js` son para que se pueda
instalar como app de verdad. `icons/` trae los tamaños que pide el manifest.

Si lo subo a otro hosting, la configuración de Firebase (proyecto, reglas, todo) va
anotada al final del propio `index.html`, en un comentario.

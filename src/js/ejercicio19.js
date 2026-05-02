// Capturar el evento clic del botón y cambiar el texto del párrafo
const boton = document.getElementById('miBoton');
const parrafo = document.getElementById('miParrafo');

let contador = 0;
const textos = [
    'Este es el texto original del párrafo. Haz clic en el botón para cambiar el texto.',
    '¡El texto ha cambiado! Este es el segundo mensaje.',
    'Aquí va el tercer texto. ¿Sorprendido?',
    'Este es el cuarto texto. ¡Sigue haciendo clic!',
    'Volvemos al inicio...',
];

boton.addEventListener('click', function() {
    contador = (contador + 1) % textos.length;
    parrafo.textContent = textos[contador];
});

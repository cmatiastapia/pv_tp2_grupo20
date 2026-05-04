import { actualizarTexto } from "../services/serviceEjercicio22.js";
// 1. Capturamos los elementos por su ID
const inputUsuario = document.getElementById('miInput');
const textoEspejo = document.getElementById('espejo');

// 2. Escuchamos el evento 'input' (se dispara cada vez que pulsas una tecla)
inputUsuario.addEventListener('input', () => 
    {


// 3. Llamamos a la función que importamos
 actualizarTexto(textoEspejo, inputUsuario.value)
});

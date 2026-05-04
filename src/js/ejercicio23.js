import {textoLargo} from "../services/serviceEjercicio23.js";

const ingresoTexto = document.querySelector('#inputTexto');
const salidaTexto = document.querySelector('#ouputTexto');

ingresoTexto.addEventListener('input', (evento) => {
    const valorTexto = evento.target.value;

    salidaTexto.textContent = valorTexto || "Esperando el texto...";

    if(textoLargo(valorTexto)){
        salidaTexto.classList.add('fondoTextoLargo');
    }
    else{
        salidaTexto.classList.remove('fondoTextoLargo');
    }
});
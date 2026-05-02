import {textoLargo} from "../../services/serviceEjercicio23.js";

const ingresoTexto = document.querySelector("#inputTexto");
const salidaTexto = document.querySelector("#ouputTexto");

ingresoTexto.addEventListener("input", (evento) => {
    const valorTexto = evento.target.value;

    salidaTexto.textContent = valorTexto || "Esperando el texto...";

    if(textoLargo(valorTexto)){
        salidaTexto.style.backgroundColor = "#d57373";
        salidaTexto.style.borderColor = "#ffffff";
    }
    else{
        salidaTexto.style.backgroundColor = "#90c964";
        salidaTexto.style.borderColor = "#ffffff";
    }
});
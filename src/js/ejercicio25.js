import { generarColor, cambiarColorFondo } from "../services/serviceEjercicio25.js";

const boton = document.querySelector("#btnColor");
const titulo = document.querySelector("h1"); // 👈 FALTABA ESTO

boton.addEventListener("click", () => {
    const color = generarColor();

    cambiarColorFondo(color);

    console.log(`Color cambiado a: ${color}`);

    // animación del título
    titulo.classList.add("animar-titulo");

    setTimeout(() => {
        titulo.classList.remove("animar-titulo");
    }, 300);
});
import { formatearNombre, mostrarEnPantalla, limpiarCampos } from "../services/serviceEjercicio20.js";

const form = document.querySelector("#formulario");
const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputLibreta = document.querySelector("#libreta");
const resultado = document.querySelector("#resultado");



form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        return; // deja que el navegador muestre errores
    }
    e.preventDefault();

    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let libreta = inputLibreta.value;

    nombre = formatearNombre(nombre);
    apellido = formatearNombre(apellido);

    alert(`Los datos ingresados son:
            Nombre: ${nombre}
            Apellido: ${apellido}
            Libreta Universitaria: APU ${libreta}`);



    mostrarEnPantalla(resultado, nombre, apellido, libreta);
    limpiarCampos(inputNombre, inputApellido, inputLibreta);
});
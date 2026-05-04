export const formatearNombre = (texto) => {
    if (texto.length === 0) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
};


export const mostrarEnPantalla = (elemento, nombre, apellido, libreta) => {
    elemento.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Libreta Universitaria: APU</strong> ${libreta}</p>
    `;
};


export const limpiarCampos = (inputNombre, inputApellido, inputLibreta) => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputLibreta.value = "";
};


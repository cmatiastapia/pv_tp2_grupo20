import {descripcionStack} from '../services/serviceEjercicio24.js';

// Botones
const botonStack = document.querySelectorAll('input[name="stack"]');
const botonTema = document.querySelectorAll('input[name="tema"]');
const resultadoStack = document.querySelector('#mostrarStack');

// Change Tema Visual
botonTema.forEach(boton => {
    boton.addEventListener('change', (evento) => {
        if (evento.target.value === 'oscuro') {
            document.body.classList.add('modo-oscuro');
        } else {
            document.body.classList.remove('modo-oscuro');
        }

        // Resultado por consola
        console.log(`Tema cambiado a: ${evento.target.value}`);
    });
});

// Change Stack
botonStack.forEach(boton => {
    boton.addEventListener('change', (evento) => {
        const seleccion = evento.target.value;
        const info = descripcionStack(seleccion);
        
        resultadoStack.textContent = info;

        // Resultado por consola
        console.log(`Stack seleccionado: ${seleccion}`);
    });
});
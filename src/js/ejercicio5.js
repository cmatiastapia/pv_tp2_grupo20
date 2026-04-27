/* DESARROLLO EJERCICIO 5 -TP2 */

/* Funcion flecha: convertir horas y minutos a segundos */
const convertirASegundos = (horas, minutos) => {

    const horasEnSegundos = horas * 3600; /* Conversion de horas a segundos */
    const minutosEnSegundos = minutos * 60; /* Conversion de minutos a segundos */
    const totalSegundos = horasEnSegundos + minutosEnSegundos; /* Suma de los segundos */

    /* Mostrar el resultado en la consola */
    console.log(`El total de segundos de la hora ${horas} y ${minutos} minutos es: ${totalSegundos} segundos.`);
}

/* LLamado a la funcion flecha con parametros*/
convertirASegundos(19, 35);
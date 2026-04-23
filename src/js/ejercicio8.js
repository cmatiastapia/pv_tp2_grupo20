/*
8. Declarar un array denominado notas que almacene 10 notas (números enteros). Con el 
array cargado realice lo siguiente: 
a) Recorrer el array y mostrar cada nota. 
b) Mostrar cuáles notas están aprobadas (>=6) 
c) Mostrar cuáles están desaprobadas (<6). 
d) Calcular el promedio general. 
e) Mostrar la cantidad de notas que están aprobadas.
*/

console.log("Ejercicio 8");

const notas = [7, 5, 8, 4, 9, 6, 3, 10, 2, 7];
console.log("Notas en el array:");
for (let i = 0; i < notas.length; i++) {
    console.log((i + 1) + ". " + notas[i]);
}
console.log("Notas aprobadas (>=6):");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        console.log((i + 1) + ". " + notas[i]);
    }
}
console.log("Notas desaprobadas (<6):");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 6) {
        console.log((i + 1) + ". " + notas[i]);
    }
}
let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}
const promedio = suma / notas.length;
console.log("El promedio general es: " + promedio);
let cantidadAprobadas = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        cantidadAprobadas++;
    }
}
console.log("La cantidad de notas aprobadas es: " + cantidadAprobadas); 
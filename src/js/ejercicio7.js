/*7. Declarar un array denominado nombres con al menos 6 nombres. 
Mostrar los nombres del array y obtener el nombre más largo del array nombres.  
Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length) 
que indica su tamaño. */
console.log("Ejercicio 7");

const nombres = ["Ana", "Bernardo", "Carla", "Diego", "Elena", "Federico"];

console.log("Nombres en el array:");
for (let i = 0; i < nombres.length; i++) {
    console.log((i + 1) + ". " + nombres[i]);
}

let nombreMasLargo = nombres[0];
for (let i = 1; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}

console.log("El nombre más largo es: " + nombreMasLargo);
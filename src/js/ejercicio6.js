const edades=[3,65,18,23,7,0,43,101];
let suma=0;
const mostrar = (edad)=>{
    console.log("Listando las edades:");
    edad.forEach( e => {
        console.log(`Edad: ${e} anios`);
        suma+=e;
    })
}
mostrar(edades)

const promedio=()=>{ console.log(`El promedio de las edades es: ${suma/edades.length}`) }
promedio()
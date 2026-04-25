const radio = 4;
const calcularVolumen = (r) => (4 / 3) * Math.PI * Math.pow(r, 3);
const volumen = calcularVolumen(radio);
console.log(`El volumen de una esfera con radio ${radio}m es: ${volumen.toFixed(2)} m³`);
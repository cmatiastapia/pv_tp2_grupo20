export const generarColor = () => {
    const colores = [
        "#7D1809",
        "#60a5fa",
        "#E46CC4",
        "#090D7D",
        "#D69865",
        "#BCD467",
        "#facc15",
        "#7D095C",
        "#a78bfa",
        "#93c5fd",
        "#f9a8d4",
        "#fdba74",
        "#fde68a"
        
    ];

    const indice = Math.floor(Math.random() * colores.length);

    return colores[indice];
};

export const cambiarColorFondo = (color) => {
    document.body.style.backgroundColor = color;
};
const descripciones = {
    "ia": "STACK: Python, TensorFlow, PyTorch y SQL. Te especializarás en modelos predictivos y análisis de grandes volúmenes de datos.",
    "web": "STACK: HTML5, CSS3, JavaScript (React/Node.js). Te enfocarás en crear interfaces interactivas y arquitecturas escalables.",
    "seguridad": "STACK: Linux, Wireshark, Metasploit y Python. Tu objetivo será proteger infraestructuras y realizar auditorías de seguridad."
};

export const descripcionStack = (especialidad) => {
    return descripciones[especialidad];
};
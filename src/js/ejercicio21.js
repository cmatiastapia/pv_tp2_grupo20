// Mapeo de países a provincias/estados
const paisesProvincias = {
    argentina: {
        pais: 'Argentina',
        provincias: [
            { id: 'buenos-aires-prov', nombre: 'Buenos Aires' },
            { id: 'cordoba', nombre: 'Córdoba' },
            { id: 'santa-fe', nombre: 'Santa Fe' },
            { id: 'mendoza', nombre: 'Mendoza' },
            { id: 'misiones', nombre: 'Misiones' },
            { id: 'salta', nombre: 'Salta' }
        ]
    },
    brasil: {
        pais: 'Brasil',
        provincias: [
            { id: 'sao-paulo', nombre: 'São Paulo' },
            { id: 'rio-janeiro', nombre: 'Rio de Janeiro' },
            { id: 'minas-gerais', nombre: 'Minas Gerais' },
            { id: 'bahia', nombre: 'Bahia' },
            { id: 'santa-catarina', nombre: 'Santa Catarina' },
            { id: 'rio-grande-sul', nombre: 'Rio Grande do Sul' }
        ]
    },
    canada: {
        pais: 'Canadá',
        provincias: [
            { id: 'ontario', nombre: 'Ontario' },
            { id: 'quebec', nombre: 'Quebec' },
            { id: 'british-columbia', nombre: 'British Columbia' },
            { id: 'alberta', nombre: 'Alberta' },
            { id: 'manitoba', nombre: 'Manitoba' },
            { id: 'saskatchewan', nombre: 'Saskatchewan' }
        ]
    },
    chile: {
        pais: 'Chile',
        provincias: [
            { id: 'valparaiso', nombre: 'Región de Valparaíso' },
            { id: 'ohiggins', nombre: 'Región del Libertador General Bernardo O\'Higgins' },
            { id: 'maule', nombre: 'Región del Maule' },
            { id: 'metropolitana', nombre: 'Región Metropolitana' },
            { id: 'los-rios', nombre: 'Región de Los Ríos' },
            { id: 'los-lagos', nombre: 'Región de Los Lagos' }
        ]
    },
    colombia: {
        pais: 'Colombia',
        provincias: [
            { id: 'cundinamarca', nombre: 'Cundinamarca' },
            { id: 'antioquia', nombre: 'Antioquia' },
            { id: 'valle-cauca', nombre: 'Valle del Cauca' },
            { id: 'bolivar', nombre: 'Bolívar' },
            { id: 'nariño', nombre: 'Nariño' },
            { id: 'cauca', nombre: 'Cauca' }
        ]
    },
    mexico: {
        pais: 'México',
        provincias: [
            { id: 'jalisco', nombre: 'Jalisco' },
            { id: 'guanajuato', nombre: 'Guanajuato' },
            { id: 'veracruz', nombre: 'Veracruz' },
            { id: 'oaxaca', nombre: 'Oaxaca' },
            { id: 'chiapas', nombre: 'Chiapas' },
            { id: 'yucatan', nombre: 'Yucatán' }
        ]
    }
};

// Obtener referencias a los elementos del DOM
const selectPaises = document.getElementById('paises');
const selectProvincias = document.getElementById('provincias');
const infoText = document.getElementById('infoText');

// Función para cargar provincias dinámicamente
function cargarProvincias(pais) {
    // Limpiar opciones previas
    selectProvincias.innerHTML = '';
    
    if (pais === '') {
        // Si no hay país seleccionado
        selectProvincias.innerHTML = '<option value="">-- Selecciona un país primero --</option>';
        selectProvincias.disabled = true;
        infoText.textContent = 'Selecciona un país para ver sus provincias/estados';
        console.log('Se limpió la selección');
    } else {
        // Obtener la información del país
        const info = paisesProvincias[pais];
        
        // Crear opción por defecto
        const optionDefault = document.createElement('option');
        optionDefault.value = '';
        optionDefault.textContent = `-- Selecciona una provincia/estado de ${info.pais} --`;
        selectProvincias.appendChild(optionDefault);
        
        // Agregar provincias al select
        info.provincias.forEach(provincia => {
            const option = document.createElement('option');
            option.value = provincia.id;
            option.textContent = provincia.nombre;
            selectProvincias.appendChild(option);
        });
        
        // Seleccionar la primera provincia automáticamente
        selectProvincias.value = info.provincias[0].id;
        selectProvincias.disabled = false;
        
        // Actualizar el mensaje de información
        infoText.textContent = `País: ${info.pais} | Provincia/Estado: ${info.provincias[0].nombre}`;
        
        // Mostrar en consola
        console.log(`País seleccionado: ${info.pais}`);
        console.log(`Provincia/Estado: ${info.provincias[0].nombre}`);
        console.log(`---`);
    }
}

// Agregar evento 'change' al select de países
selectPaises.addEventListener('change', function() {
    cargarProvincias(this.value);
});

// Agregar evento 'change' al select de provincias
selectProvincias.addEventListener('change', function() {
    if (this.value) {
        const paisSeleccionado = selectPaises.value;
        const info = paisesProvincias[paisSeleccionado];
        const provinciaNombre = info.provincias.find(p => p.id === this.value).nombre;
        
        // Actualizar el mensaje de información
        infoText.textContent = `País: ${info.pais} | Provincia/Estado: ${provinciaNombre}`;
        
        // Mostrar en consola
        console.log(`País seleccionado: ${info.pais}`);
        console.log(`Provincia/Estado seleccionada: ${provinciaNombre}`);
        console.log(`---`);
    }
});

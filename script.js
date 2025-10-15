document.addEventListener('DOMContentLoaded', (event) => {
    
    // Función para actualizar el gráfico de Flexibilidad del Estilo
    function updateFlexibilidadChart(valor) {
        const barra = document.getElementById('flexibilidad-barra');
        if (barra) {
            const alturaPorcentual = Math.min(100, Math.max(0, (valor / 30) * 100));
            barra.style.height = `${alturaPorcentual}%`;
        }
    }

    // Función para actualizar el gráfico de Eficacia del Estilo
    function updateEficaciaChart(valor) {
        const barra = document.getElementById('eficacia-barra');
        if (barra) {
            const valorBase = 20;
            const rangoTotal = 60;
            const alturaPorcentual = Math.min(100, Math.max(0, ((valor - valorBase) / rangoTotal) * 100));
            barra.style.height = `${alturaPorcentual}%`;
        }
    }
    
    // Función para inicializar los valores desde el DOM
    function initializeFromDOM() {
        // Actualizar gráficos
        const flexValorSpan = document.getElementById('flexibilidad-valor');
        if(flexValorSpan) {
            const flexValor = parseInt(flexValorSpan.textContent, 10);
            if (!isNaN(flexValor)) {
                updateFlexibilidadChart(flexValor);
            }
        }
        
        const eficValorSpan = document.getElementById('eficacia-valor');
        if(eficValorSpan) {
            const eficValor = parseInt(eficValorSpan.textContent, 10);
             if (!isNaN(eficValor)) {
                updateEficaciaChart(eficValor);
            }
        }

        // Ocultar ceros en las cuadrículas
        const ids = [
            'prim-e1', 'prim-e2', 'prim-e3', 'prim-e4',
            'sec-e1', 'sec-e2', 'sec-e3', 'sec-e4',
            'des-e1', 'des-e2', 'des-e3', 'des-e4',
            'efic-e1', 'efic-e2', 'efic-e3', 'efic-e4'
        ];

        ids.forEach(id => {
            const elemento = document.getElementById(id);
            if (elemento) {
                const valorNumerico = parseInt(elemento.textContent, 10);
                if (!isNaN(valorNumerico) && valorNumerico === 0) {
                    elemento.textContent = ''; // Limpia el contenido si es 0
                }
            }
        });
    }

    // Se espera un breve momento para que AppSheet (o cualquier otro sistema) reemplace las etiquetas.
    // Si los datos están presentes al cargar, se ejecutará inmediatamente.
    setTimeout(initializeFromDOM, 100);
});

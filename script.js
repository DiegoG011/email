document.addEventListener('DOMContentLoaded', function() {
    
    // Función para actualizar una barra de gráfico.
    // Espera un poco para dar tiempo a que AppSheet reemplace las etiquetas.
    function updateBar(barId, valueId, minValue, maxValue) {
        const bar = document.getElementById(barId);
        const valueSpan = document.getElementById(valueId);
        
        if (bar && valueSpan) {
            setTimeout(() => {
                const textValue = valueSpan.textContent.trim();
                let value = parseFloat(textValue);
                
                if (!isNaN(value)) {
                    // Asegurarse que el valor esté dentro del rango
                    value = Math.max(minValue, Math.min(maxValue, value));
                    
                    const range = maxValue - minValue;
                    if (range > 0) {
                        const percentage = ((value - minValue) / range) * 100;
                        bar.style.height = percentage + '%';
                    }
                }
            }, 200); // Un pequeño retraso para asegurar que los datos de AppSheet se carguen
        }
    }

    // Actualizar los dos gráficos
    updateBar('flexibilidad-barra', 'flexibilidad-valor', 0, 30);
    updateBar('eficacia-barra', 'eficacia-valor', 20, 80);

    // Función para ocultar los valores de las cuadrículas si son '0'
    function hideZeroValues() {
        const valueSpans = document.querySelectorAll('.grid-cell-value');
        
        setTimeout(() => {
            valueSpans.forEach(span => {
                if (span.textContent.trim() === '0') {
                    // Oculta el número pero mantiene el espacio para no desalinear
                    span.style.visibility = 'hidden'; 
                }
            });
        }, 200);
    }

    hideZeroValues();

});

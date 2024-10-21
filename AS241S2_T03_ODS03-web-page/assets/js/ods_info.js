// Funcionalidad para expandir/cerrar los detalles de ODS en la galería
const odsItems = document.querySelectorAll('.ods-item');

odsItems.forEach(item => {
    item.addEventListener('click', function() {
        // Si el elemento ya está activo, lo cerramos
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            // Cerrar otros elementos abiertos
            odsItems.forEach(i => i.classList.remove('active'));
            // Abrir el elemento actual
            this.classList.add('active');
        }
    });
});
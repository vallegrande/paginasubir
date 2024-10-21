
// Función para gestionar el overlay de carga
document.addEventListener('DOMContentLoaded', function() {
    var loadingOverlay = document.getElementById('loading-overlay');
    setTimeout(function() {
        loadingOverlay.style.display = 'none';
    }, 1500); 
});
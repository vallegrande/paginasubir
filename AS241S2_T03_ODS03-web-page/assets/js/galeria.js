document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el mapa y establecer la vista inicial
    const map = L.map('map').setView([-13.0763, -76.3855], 13);

    // Agregar capa de teselas de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregar un marcador
    L.marker([-13.0763, -76.3855]).addTo(map)
        .bindPopup('Hospital Rezola')
        .openPopup();

    // Agregar un círculo
    L.circle([-13.0763, -76.3855], {
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.2,
        radius: 2000
    }).addTo(map);
});

// Muro de Imágenes
function openImageModal(src) {
    document.getElementById('modal-image').src = src;
    document.getElementById('image-modal').style.display = 'flex';
    document.getElementById('modal-footer').style.display = 'flex'; 
    document.getElementById('share-options').style.display = 'none'; 
}

function closeImageModal() {
    document.getElementById('image-modal').style.display = 'none';
    document.getElementById('modal-footer').style.display = 'none'; 
}

function downloadImage() {
    const imageSrc = document.getElementById('modal-image').src;
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'imagen_de_la_galeria.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function toggleShareOptions() {
    const shareOptions = document.getElementById('share-options');
    shareOptions.style.display = shareOptions.style.display === 'none' || shareOptions.style.display === '' ? 'flex' : 'none';
}

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('image-modal')) {
        closeImageModal();
    }
});
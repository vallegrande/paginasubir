// Funcionalidad para el carrusel de imágenes
let currentSlide = 0;
const carouselWrapper = document.querySelector('.carousel-wrapper');
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const offset = currentSlide * -100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

// Auto avance del carrusel cada 2 segundos
setInterval(showNextSlide, 2000);


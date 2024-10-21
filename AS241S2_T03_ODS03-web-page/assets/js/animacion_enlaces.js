/* Función para animar el scroll al hacer clic en los enlaces del navbar
const navbarLinks = document.querySelectorAll('ul li a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevenir el comportamiento por defecto del enlace
        event.preventDefault();

        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50, 
                behavior: 'smooth'
            });
        }
    });
});
*/
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase 'active' de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));
            // Añadir clase 'active' al enlace clickeado
            this.classList.add('active');
            
            // Ocultar todas las secciones
            sections.forEach(section => section.classList.remove('active-section'));
            // Mostrar la sección correspondiente
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).classList.add('active-section');
        });
    });
});
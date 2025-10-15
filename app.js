// Menú móvil
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('nav ul').classList.remove('active');
    });
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Formulario de contacto
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.reset();
});

// Formulario de suscripción
document.querySelector('.footer-col form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por suscribirte! Recibirás nuestras novedades pronto.');
    this.reset();
});
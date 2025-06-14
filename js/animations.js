// Animaciones personalizadas para Lili's Florería
document.addEventListener('DOMContentLoaded', function() {
    // Función para detectar cuando un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animación de aparición suave para elementos
    function animateOnScroll() {
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }

    // Observador para animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', entry.target.dataset.animation || 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar elementos con la clase .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Efecto parallax suave para imágenes de fondo
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.parallax-bg').forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(window.pageYOffset * speed);
            element.style.backgroundPosition = `center ${yPos}px`;
        });
    });

    // Animación para el menú al hacer scroll
    let lastScroll = 0;
    const header = document.getElementById('header_main');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });

    // Efecto de hover para imágenes
    document.querySelectorAll('.image-zoom').forEach(container => {
        const img = container.querySelector('img');
        
        container.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        });
    });

    // Inicializar animaciones de flores flotantes
    function createFloatingFlower() {
        const flower = document.createElement('div');
        flower.className = 'floating-flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = (Math.random() * 3 + 3) + 's';
        flower.style.animationDelay = Math.random() * 2 + 's';
        document.querySelector('.floating-flowers').appendChild(flower);
        
        setTimeout(() => {
            flower.remove();
        }, 6000);
    }

    setInterval(createFloatingFlower, 3000);
});

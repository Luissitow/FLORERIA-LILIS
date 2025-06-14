document.addEventListener('DOMContentLoaded', function() {
    // Configuración para todos los carruseles
    const swiperElements = document.querySelectorAll('.swiper');
    
    swiperElements.forEach((element, index) => {
        const swiper = new Swiper(element, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: element.querySelector('.swiper-pagination'),
                type: 'fraction',
                clickable: true,
                renderFraction: function (currentClass, totalClass) {
                    return `<span class="${currentClass}"></span>` +
                           ' / ' +
                           `<span class="${totalClass}"></span>`;
                }
            },
            navigation: {
                nextEl: element.querySelector('.swiper-button-next'),
                prevEl: element.querySelector('.swiper-button-prev'),
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000,
            // Asegurarse de que la paginación se actualice
            on: {
                init: function () {
                    this.pagination.render();
                    this.pagination.update();
                },
                slideChange: function () {
                    this.pagination.render();
                    this.pagination.update();
                }
            }
        });
    });
});

// Инициализация всех слайдеров с классом '.swiper-container'
document.querySelectorAll('.swiper-container').forEach((slider) => {
    new Swiper(slider, {
        slidesPerView: 4, // Количество отображаемых слайдов
        spaceBetween: 16, // Расстояние между слайдами
        navigation: {
            nextEl: slider.querySelector('.swiper-button-next'),
            prevEl: slider.querySelector('.swiper-button-prev'),
        },
        breakpoints: {
            320: {
                slidesPerView: 1.45,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', function() {
        menu.classList.toggle('active');
        burger.classList.toggle('open');
    });
});
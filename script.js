// Инициализация всех слайдеров с классом '.swiper-container'
document.querySelectorAll('.swiper-container').forEach((slider) => {
    new Swiper(slider, {
        slidesPerView: 3, // Количество отображаемых слайдов
        spaceBetween: 16, // Расстояние между слайдами
        navigation: {
            nextEl: slider.querySelector('.swiper-button-next'),
            prevEl: slider.querySelector('.swiper-button-prev'),
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });
});
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

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    preloader.style.display = 'none';
    content.style.display = 'block';
});

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    // Таймер на 3 секунды
    setTimeout(function() {
        preloader.classList.add('hidden');  // Начинаем анимацию исчезновения
        setTimeout(function() {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 500); // Время должно совпадать с временем transition в CSS
    }, 2000); // Длительность прелоадера 3 секунды
});

document.addEventListener("DOMContentLoaded", function() {
    const orderCallButton = document.getElementById("orderCall");
    const closePopupButton = document.getElementById("closePopup");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
  
    function openPopup() {
        overlay.style.display = "flex";
        popup.style.display = "block";
    }
  
    function closePopup() {
        overlay.style.display = "none";
        popup.style.display = "none";
    }
  
    orderCallButton.addEventListener("click", openPopup);
    closePopupButton.addEventListener("click", closePopup);
  
    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
            closePopup();
        }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const orderCallButton = document.getElementById("orderCall-1");
    const closePopupButton = document.getElementById("closePopup");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
  
    function openPopup() {
        overlay.style.display = "flex";
        popup.style.display = "block";
    }
  
    function closePopup() {
        overlay.style.display = "none";
        popup.style.display = "none";
    }
  
    orderCallButton.addEventListener("click", openPopup);
    closePopupButton.addEventListener("click", closePopup);
  
    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
            closePopup();
        }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const orderCallButton = document.getElementById("orderCall-2");
    const closePopupButton = document.getElementById("closePopup");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
  
    function openPopup() {
        overlay.style.display = "flex";
        popup.style.display = "block";
    }
  
    function closePopup() {
        overlay.style.display = "none";
        popup.style.display = "none";
    }
  
    orderCallButton.addEventListener("click", openPopup);
    closePopupButton.addEventListener("click", closePopup);
  
    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
            closePopup();
        }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const orderCallButton = document.getElementById("orderCall-3");
    const closePopupButton = document.getElementById("closePopup");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
  
    function openPopup() {
        overlay.style.display = "flex";
        popup.style.display = "block";
    }
  
    function closePopup() {
        overlay.style.display = "none";
        popup.style.display = "none";
    }
  
    orderCallButton.addEventListener("click", openPopup);
    closePopupButton.addEventListener("click", closePopup);
  
    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
            closePopup();
        }
    });
  });
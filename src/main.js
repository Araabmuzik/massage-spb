import "animate.css";
import "./index";
import "./quiz-app";
import "./quiz-data";
import "./style.css";

// Импортируем Swiper и необходимые модули
import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

// Импортируем стили
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Инициализация Swiper после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    // Указываем используемые модули
    modules: [Navigation, Pagination, Scrollbar],

    // Основные параметры
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,

    // Пагинация
    pagination: {
      dynamicBullets: true,
      el: ".swiper-pagination",
      clickable: true,
    },

    // Навигация
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },

    // Скроллбар
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },

    // Автопрокрутка (опционально)
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // Адаптивность
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Экспортируем для доступа из консоли (опционально)
  window.mySwiper = swiper;
});

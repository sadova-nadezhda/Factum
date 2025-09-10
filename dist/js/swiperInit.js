export function initializeSwipers() {
  var teamSwiper = new Swiper(".teamsSwiper", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1025: {
        slidesPerView: 3.87,
        spaceBetween: 20,
      },
    },
  });
  var thumbs = new Swiper(".growth-thumb", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".growth-next",
      prevEl: ".growth-prev",
    },
    breakpoints: {
      768: {
        direction: "vertical",
      },
    },
  });
  
  var slider = new Swiper(".growth-slider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".growth-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return current + "/" + total;
      },
    },
    navigation: {
      nextEl: ".growth-next",
      prevEl: ".growth-prev",
    },
    thumbs: {
      swiper: thumbs,
    },
    breakpoints: {
      768: {
        direction: "vertical",
      },
    },
  });
}
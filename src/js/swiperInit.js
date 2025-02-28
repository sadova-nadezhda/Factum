export function initializeSwipers() {
  var teamSwiper = new Swiper(".teamsSwiper", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    initialSlide: 2,
    slidesPerGroup: 1,
    speed: 1000,
    loop: true,
    slideToClickedSlide: true,
    loopFillGroupWithBlank: false,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      980: {
        slidesPerView: 3.2,
      },
      1100: {
        slidesPerView: 4.2,
      },
    },
  });
}
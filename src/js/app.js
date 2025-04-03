import { menuInit } from './menu.js';
import { animateLetters } from './animateLetters.js';
import { animateGsap } from './animateGsap.js';
import { mediaShow } from './mediaShow.js';
import { initializeSwipers } from './swiperInit.js';
import { accordionInit } from './accordion.js';
import { modalInit } from './modal.js';

window.addEventListener("load", function () {
  menuInit();
  animateGsap();
  mediaShow();
  initializeSwipers();
  animateLetters();
  accordionInit();
  modalInit();

  const phoneWrappers = [
    {selector: ".phone-wr", className: "phone-el"},
    {selector: ".phone-wr-mob", className: "phone-el-mob"}
  ];

  const phoneNumber = "+7 747 111 00 44";

  phoneWrappers.forEach(({selector, className}) => {
      const phoneWrapper = document.querySelector(selector);
      if (phoneWrapper) {
          phoneWrapper.addEventListener("click", function () {
              const phoneLink = document.createElement("a");
              phoneLink.href = `tel:${phoneNumber}`;
              phoneLink.className = className;
              phoneLink.textContent = phoneNumber;
              phoneWrapper.replaceWith(phoneLink);
          });
      }
  });
});

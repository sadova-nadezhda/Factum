import { menuInit } from './menu.js';
import { animateLetters } from './animateLetters.js';
import { animateGsap } from './animateGsap.js';
import { mediaShow } from './mediaShow.js';
import { initializeSwipers } from './swiperInit.js';
import { accordionInit } from './accordion.js';
import { modalInit } from './modal.js';

window.addEventListener("load", function () {
  // preloader 

  
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

  // mask for phone

  [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substring(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
});

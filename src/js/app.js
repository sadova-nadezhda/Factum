import { animateLetters } from './animateLetters.js';
import { animateGsap } from './animateGsap.js';
import { mediaShow } from './mediaShow.js';
import { initializeSwipers } from './swiperInit.js';

window.addEventListener("load", function () {
  animateGsap();
  mediaShow();
  initializeSwipers();
  animateLetters();
});

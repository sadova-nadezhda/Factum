export function accordionInit() {
  const items = document.querySelectorAll(".accordion__item");

  items.forEach((el) => {
    el.addEventListener("click", function () {
      this.classList.toggle("active");
      let accBody = this.querySelector(".accordion__body");
      if (accBody.style.maxHeight) {
        accBody.style.maxHeight = null;
      } else {
        accBody.style.maxHeight = accBody.scrollHeight + "px";
      }
    });
  });
}
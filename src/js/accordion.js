export function accordionInit() {
  let clickedId = new URLSearchParams(window.location.search).get("id");
  let initialActiveItem = clickedId ? document.querySelector(".vacancies__item#" + clickedId) : null;

  function toggleVacItem(vacItem, activate) {
    let btn = vacItem.querySelector(".vacancies__btn");
    let hiddenContent = vacItem.querySelectorAll(".hidden");
    let img = vacItem.querySelector(".vacancies__img");
    let parentList = vacItem.closest(".vacancies__accordion");
    
    if (activate) {
      btn.classList.add("active");
      vacItem.classList.add("active");
      hiddenContent.forEach(el => el.style.display = "block");
      img?.classList.add("show");
      parentList.querySelectorAll(".vacancies__item").forEach(sibling => {
        if (sibling !== vacItem) toggleVacItem(sibling, false);
      });
    } else {
      btn.classList.remove("active");
      vacItem.classList.remove("active");
      hiddenContent.forEach(el => el.style.display = "none");
      img?.classList.remove("show");
    }
  }

  document.querySelectorAll(".vacancies__top").forEach(item => {
    item.addEventListener("click", function () {
      let vacItem = this.closest(".vacancies__item");
      toggleVacItem(vacItem, !vacItem.classList.contains("active"));
    });
  });

  if (initialActiveItem) {
    toggleVacItem(initialActiveItem, true);
    window.scrollTo({ top: initialActiveItem.offsetTop - 80, behavior: "smooth" });
  }
}
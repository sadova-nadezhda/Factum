export function accordionInit() {
  // let clickedId = new URLSearchParams(window.location.search).get("id");
  // let initialActiveItem = clickedId ? document.querySelector(".vac-list-item#" + clickedId) : null;

  // function toggleVacItem(vacItem, activate) {
  //   let btn = vacItem.querySelector(".vac-list-btn");
  //   let hiddenContent = vacItem.querySelectorAll(".vac-en-hidden");
  //   let img = vacItem.querySelector(".vac-list-img");
    
  //   if (activate) {
  //     btn.classList.add("active");
  //     vacItem.classList.add("active");
  //     hiddenContent.forEach(el => el.style.display = "block");
  //     img.classList.remove("vac-en-opacity");
  //     vacItem.parentElement.querySelectorAll(".vac-list-item").forEach(sibling => {
  //       if (sibling !== vacItem) toggleVacItem(sibling, false);
  //     });
  //   } else {
  //     btn.classList.remove("active");
  //     vacItem.classList.remove("active");
  //     hiddenContent.forEach(el => el.style.display = "none");
  //     img.classList.add("vac-en-opacity");
  //   }
  // }

  // document.querySelectorAll(".vac-list-item-st").forEach(item => {
  //   item.addEventListener("click", function () {
  //     let vacItem = this.closest(".vac-list-item");
  //     toggleVacItem(vacItem, !vacItem.classList.contains("active"));
  //   });
  // });

  // if (initialActiveItem) {
  //   toggleVacItem(initialActiveItem, true);
  //   window.scrollTo({ top: initialActiveItem.offsetTop - 80, behavior: "smooth" });
  // }

  let clickedId = new URLSearchParams(window.location.search).get("id");
  let initialActiveItem = clickedId ? document.querySelector(".vacancies__item#" + clickedId) : null;

  function toggleVacItem(vacItem, activate) {
    let btn = vacItem.querySelector(".vac-list-btn");
    let hiddenContent = vacItem.querySelectorAll(".hidden");
    let img = vacItem.querySelector(".vac-list-img");
    let parentList = vacItem.closest(".vac-list");
    
    if (activate) {
      btn.classList.add("active");
      vacItem.classList.add("active");
      hiddenContent.forEach(el => el.style.display = "block");
      img.classList.remove("vac-en-opacity");
      parentList.querySelectorAll(".vacancies__item").forEach(sibling => {
        if (sibling !== vacItem) toggleVacItem(sibling, false);
      });
    } else {
      btn.classList.remove("active");
      vacItem.classList.remove("active");
      hiddenContent.forEach(el => el.style.display = "none");
      img.classList.add("show");
    }
  }

  document.querySelectorAll(".vac-list-item-st").forEach(item => {
    item.addEventListener("click", function () {
      let vacItem = this.closest(".vac-list-item");
      toggleVacItem(vacItem, !vacItem.classList.contains("active"));
    });
  });

  if (initialActiveItem) {
    toggleVacItem(initialActiveItem, true);
    window.scrollTo({ top: initialActiveItem.offsetTop - 80, behavior: "smooth" });
  }
}
export function menuInit() {
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");

  if (menu) {
    link.addEventListener("click", function () {
      link.classList.toggle("active");
      menu.classList.toggle("open");
    });

    window.addEventListener("scroll", () => {
      if (menu.classList.contains("open")) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });

    document.addEventListener("click", (e) => {
      let target = e.target;
      if (
        !target.closest(".header__nav") &&
        !target.closest(".header__burger") &&
        !target.closest(".button-dropdown")
      ) {
        link.classList.remove("active");
        menu.classList.remove("open");
        closeAllDropdowns();
      }
    });

    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = toggle.closest(".button-dropdown");
        const dropdown = parent.querySelector(".dropdown-menu");
        const height = dropdown.scrollHeight;

        if (dropdown.style.maxHeight) {
          dropdown.style.maxHeight = null;
          parent.classList.remove("open");
        } else {
          closeAllDropdowns();

          dropdown.style.maxHeight = height + "px";
          parent.classList.add("open");
        }
      });
    });

    function closeAllDropdowns() {
      document.querySelectorAll(".button-dropdown").forEach(item => {
        item.classList.remove("open");
        const menu = item.querySelector(".dropdown-menu");
        if (menu) {
          menu.style.maxHeight = null;
        } 
      });
    }
  }
}
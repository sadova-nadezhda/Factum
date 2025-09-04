export function mediaShow() {
  const mediaCards = document.querySelectorAll(".media__card");
  const showMore = document.querySelector(".media .show");

  if(showMore && mediaCards) {
    mediaCards.forEach((card, index) => {
      if (index >= 9) card.style.display = "none";
    });
  
    showMore.addEventListener("click", function () {
      let hiddenCards = Array.from(document.querySelectorAll(".media__card"))
        .filter(card => card.style.display === "none")
        .slice(0, 9);
  
      hiddenCards.forEach(card => {
        card.style.display = "block";
        card.style.opacity = 0;
        setTimeout(() => {
          card.style.transition = "opacity 0.5s";
          card.style.opacity = 1;
        }, 10);
      });
  
      if (document.querySelectorAll(".media__card[style*='display: none']").length === 0) {
        this.style.display = "none";
      }
    });
  }
}
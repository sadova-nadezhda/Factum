export function modalInit() {
  function hidemodal(modal) {
    modal.addEventListener('click', function(e) {
      const target = e.target;
      if (
        target.classList.contains("modal__close") ||
        target.classList.contains("modal")
      ) {
        modal.style.transition = "opacity 0.4s";
        modal.style.opacity = "0";
        setTimeout(() => {
          modal.style.display = "none";
        }, 400);
      }
    });
  }

  function showmodal(modal) {
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.transition = "opacity 0.4s";
      modal.style.opacity = "1";
    }, 10);
  } 

  let modal = document.querySelector('.modal')
  let modalBtns = document.querySelectorAll(".modal-btn");
  if(modal && modalBtns){
    hidemodal(modal);
    modalBtns.forEach( btn => {
      btn.addEventListener('click', () => {
        showmodal(modal);
      })
    })
  }
}
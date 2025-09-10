export function modalInit() {
  // modal

  (function () {
    const modalWrapper = document.querySelector('.modals');
    if (!modalWrapper) return;

    const modals = Array.from(modalWrapper.querySelectorAll('.modal'));
    const body = document.body;

    const getModalByType = (type) => modalWrapper.querySelector(`.modal[data-type="${type}"]`);

    const showWrapper = () => {
      body.style.overflow = 'hidden';
      modalWrapper.style.opacity = 1;
      modalWrapper.style.pointerEvents = 'all';
    };

    const hideWrapper = () => {
      body.style.overflow = '';
      modalWrapper.style.opacity = 0;
      modalWrapper.style.pointerEvents = 'none';
    };

    const openModal = (type, fromCard = false) => {
      // Скрыть все
      modals.forEach(m => {
        m.style.display = 'none';
        m.style.removeProperty('transform');
      });

      const modal = getModalByType(type);
      if (!modal) return;

      modal.style.display = 'block';
      showWrapper();

      if (window.gsap) {
        if (type === 'vacancies') {
          // Анимация справа
          gsap.fromTo(modal, { x: '100%' }, { x: '0%', duration: 0.5, ease: 'power3.out' });
        } else {
          // Анимация сверху
          gsap.fromTo(modal, { y: '-100%' }, { y: '0%', duration: 0.5, ease: 'power3.out' });
        }
      }
    };

    const closeCurrentModal = () => {
      const current = modals.find(m => m.style.display !== 'none');
      const finishClose = () => {
        if (current) current.style.display = 'none';
        hideWrapper();
      };

      if (current && window.gsap) {
        const type = current.dataset.type;
        if (type === 'vacancies') {
          gsap.to(current, {
            x: '100%',
            duration: 0.4,
            ease: 'power3.in',
            onComplete: () => {
              current.style.removeProperty('transform');
              finishClose();
            }
          });
        } else {
          gsap.to(current, {
            y: '-100%',
            duration: 0.4,
            ease: 'power3.in',
            onComplete: () => {
              current.style.removeProperty('transform');
              finishClose();
            }
          });
        }
      } else {
        finishClose();
      }
    };

    // Открытие по .modal-btn (верх → вниз)
    document.querySelectorAll('.modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const type = btn.dataset.type;
        if (type) openModal(type);
      });
    });

    // Открытие вакансии
    document.querySelectorAll('.vacancies-join__card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();

        const modal = getModalByType('vacancies');
        if (modal) {
          modal.querySelector('.modal__position').textContent = card.dataset.position || '';
          modal.querySelector('.modal__item .city').textContent = card.dataset.city || '';
          modal.querySelector('.modal__item .mode').textContent = card.dataset.mode || '';
          modal.querySelector('.modal__item .experience').textContent = card.dataset.exper || '';
          modal.querySelector('.modal__box').innerHTML = card.dataset.desc || '';
        }

        openModal('vacancies', true);
      });
    });

    // Закрытие
    modalWrapper.addEventListener('click', (e) => {
      if (e.target === modalWrapper || e.target.closest('.modal__close')) {
        closeCurrentModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalWrapper.style.pointerEvents === 'all') {
        closeCurrentModal();
      }
    });
  })();
}
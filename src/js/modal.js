(() => {
  const refs = {
    //Додавання атрибута на кнопку відкриття модалки
    openModalBtn: document.querySelector('[data-modal-open]'),
    //Додавання атрибута на кнопку закриття модалки
    closeModalBtn: document.querySelector('[data-modal-close-x]'),
    //Додавання атрибута на другу центральну кнопку закриття модалки
    closeModalBtnTwo: document.querySelector('[data-modal-close]'),
    //Додавання атрибута на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', togModal);
  refs.closeModalBtn.addEventListener('click', togModal);
  refs.closeModalBtnTwo.addEventListener('click', togModal);

  function togModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

(() => {
  const refs = {
    //Додавання атрибута на кнопку відкриття меню
    openMenuBtn: document.querySelector('[data-menu-open]'),
    //Додавання атрибута на кнопку закриття меню
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    //Додавання атрибута на бекдроп меню
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', togMenu);
  refs.closeMenuBtn.addEventListener('click', togMenu);

  function togMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();

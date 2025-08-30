(() => {
  const refs = {
    //Додавання атрибута на кнопку відкриття меню
    openMenuBtn: document.querySelector('[data-menu-open]'),
    //Додавання атрибута на кнопку закриття меню
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    //Додавання атрибута на About us
    closeMenuLinkAb: document.querySelector('[data-menu-close]'),
    //Додавання атрибута на Benefits
    closeMenuLinkBen: document.querySelector('[data-menu-close]'),
    //Додавання атрибута на Gallery
    closeMenuLinkGal: document.querySelector('[data-menu-close]'),
    //Додавання атрибута на Testimonial
    closeMenuLinkTes: document.querySelector('[data-menu-close]'),
    //Додавання атрибута на Location
    closeMenuLinkLoc: document.querySelector('[data-menu-close]'),
    //Додавання атрибута на бекдроп меню
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', togMenu);
  refs.closeMenuBtn.addEventListener('click', togMenu);
  refs.closeMenuLinkAb.addEventListener('click', togMenu);
  refs.closeMenuLinkBen.addEventListener('click', togMenu);
  refs.closeMenuLinkGal.addEventListener('click', togMenu);
  refs.closeMenuLinkTes.addEventListener('click', togMenu);
  refs.closeMenuLinkLoc.addEventListener('click', togMenu);

  function togMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();

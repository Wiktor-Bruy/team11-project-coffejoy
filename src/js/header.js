(() => {
  const refs = {
    //Додавання атрибута на double-haeder
    header: document.querySelector('[data-header]'),
  };

  let scrollPosition = 0;
  const countScrol = 0;
  let workHeader = 0;

  window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;

    if (workHeader === 0) {
      if (scrollPosition !== countScrol) {
        refs.header.classList.toggle('is-scrol');
        workHeader = 1;
        console.log('open-header');
      }
    }
    if (workHeader === 1 && scrollPosition === countScrol) {
      refs.header.classList.toggle('is-scrol');
      workHeader = 0;
      console.log('close header');
    }
  });

  function togMenu() {
    refs.header.classList.toggle('is-scrol');
  }
})();

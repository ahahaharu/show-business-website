document.addEventListener('DOMContentLoaded', () => {
  const mybutton = document.getElementById('scroll-button');

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.classList.add('show-btn');
    } else {
      mybutton.classList.remove('show-btn');
    }
  }

  mybutton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const body = document.body;

  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
      body.classList.toggle('no-scroll');
    });

    menu.querySelectorAll('.header__menu-link').forEach((link) => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        body.classList.remove('no-scroll');
      });
    });
  }
});

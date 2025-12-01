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

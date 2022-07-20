function initScroll() {
  const menuList = document.querySelectorAll('.js-menu a[href^="#"]');

  if (menuList.length) {

    function smoothScroll(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

    }
    menuList.forEach((internLink) => {
      internLink.addEventListener('click', smoothScroll)
    })
  }
}
initScroll();

function initNavFixed() {

  const menuSelector = document.querySelector('.header');

  if (menuSelector) {
    function stickyMenu() {
      menuSelector.classList.toggle('fixed-menu', window.scrollY > 0);
    }

    window.addEventListener('scroll', stickyMenu);

  }
}
initNavFixed();
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
      console.log(href);

    }
    menuList.forEach((internLink) => {
      internLink.addEventListener('click', smoothScroll)
    })
  }
}


// fucntion initNavFixed() {}
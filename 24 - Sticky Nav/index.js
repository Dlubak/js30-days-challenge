const navbar = document.querySelector('#main');
const navbarOffset = navbar.offsetTop;

function stickyNavBar() {
  if (window.scrollY >= navbarOffset) {
    console.log(window.scrollY);
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.onscroll = stickyNavBar;

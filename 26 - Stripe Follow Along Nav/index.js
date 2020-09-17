const dropdownTriggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 150);
  const {
    height,
    width,
    left,
    top,
  } = this.lastElementChild.getBoundingClientRect();
  const navcoord = nav.getBoundingClientRect();
  background.classList.add('open');
  background.style.width = `${width}px`;
  background.style.height = `${height}px`;
  background.style.transform = `translate(
    ${left - navcoord.left}px, ${top - navcoord.top}px)`;
}

function handleLeave() {
  this.classList.remove('trigger-enter');
  this.classList.remove('trigger-enter-active');
  background.classList.remove('open');
}

dropdownTriggers.forEach(trigger =>
  trigger.addEventListener('mouseenter', handleEnter)
);

dropdownTriggers.forEach(trigger =>
  trigger.addEventListener('mouseleave', handleLeave)
);

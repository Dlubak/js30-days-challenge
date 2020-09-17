const slider = document.querySelector('.items');
let mouseDown = false;
let posX;
let scrollLeft;

slider.addEventListener('mousedown', event => {
  mouseDown = true;
  slider.classList.add('active');
  posX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  mouseDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  mouseDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', event => {
  if (!mouseDown) return;
  event.preventDefault();
  const x = event.pageX - slider.offsetLeft;
  const drag = (x - posX) * 3;
  slider.scrollLeft = scrollLeft - drag;
});
// mousedown;
// mouseleave;
// mouseup;
// mousemove;

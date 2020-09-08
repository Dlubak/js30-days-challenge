const heroEl = document.querySelector('.hero');
const text = heroEl.querySelector('h1');
const range = 50 * 2;

function handleMouseEvent(event) {
  let { x } = event;
  let { y } = event;
  const [textHeight, textWidth] = [heroEl.offsetWidth, heroEl.offsetHeight];
  if (!event.target.matches('h1')) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }
  const xRange = Math.round((y / textWidth) * range - range / 2);
  const yRange = Math.round((x / textHeight) * range - range / 2);

  text.style.textShadow = `${xRange}px ${yRange}px 0 red`;
}

heroEl.addEventListener('mousemove', handleMouseEvent);

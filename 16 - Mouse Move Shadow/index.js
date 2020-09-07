const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;
function handleMouseMove(event) {
  const [textHeight, textWidth] = [hero.offsetWidth, hero.offsetHeight];
  let { x } = event;
  let { y } = event;
  if (!event.target.matches('h1')) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }
  const xWalk = Math.round((x / textHeight) * walk - walk / 2);
  const yWalk = Math.round((y / textWidth) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

hero.addEventListener('mousemove', handleMouseMove);

const canvasEl = document.querySelector('#draw');
const ctx = canvasEl.getContext('2d');
canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let mouseDown = false;
let lastX = 0;
let lastY = 0;
const randomHsl = () => `hsl(${Math.random() * 360}, 100%, 50%)`;

function draw(e) {
  if (!mouseDown) return;
  console.log(randomHsl);
  ctx.strokeStyle = randomHsl();
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function setPosition(e) {
  mouseDown = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function setMouseDown() {
  mouseDown = false;
}

canvasEl.addEventListener('mousedown', setPosition);
canvasEl.addEventListener('mousemove', draw);
canvasEl.addEventListener('mouseup', setMouseDown);
canvasEl.addEventListener('mouseout', setMouseDown);

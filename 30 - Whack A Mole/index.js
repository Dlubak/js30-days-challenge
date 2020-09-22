const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let score = 0;

function getRandomHole(holes) {
  const randomHole = Math.floor(Math.random() * holes.length);
  return holes[randomHole];
}

function startGame() {
  setInterval(() => {
    const hole = getRandomHole(holes);
    hole.classList.add('up');
    setTimeout(() => hole.classList.remove('up'), 500);
  }, 1000);
}

moles.forEach(mole =>
  mole.addEventListener('click', event => {
    event.target.parentNode.classList.remove('up');
    score += 1;
    scoreBoard.textContent = score;
  })
);

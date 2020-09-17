const timer = document.querySelector('.timer');
const timerControls = timer.querySelectorAll('button');
console.log(timerControls);
const display = document.querySelector('.display');

function displayDate() {
  const date = new Date();
  const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  display.querySelector('.display__time-left').innerHTML = formattedDate;
}
function calculateRemaingTime() {}
// console.log(display.querySelector('.display__time-left'));
function handleTimer(e) {
  setInterval(displayDate, 100);
}
timerControls.forEach(timerButton =>
  timerButton.addEventListener('click', handleTimer)
);

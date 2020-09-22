const timer = document.querySelector('.timer');
const timerControls = timer.querySelectorAll('.timer__button');
const timerForm = timer.querySelector('#custom');
const display = document.querySelector('.display');
const displayTimeLeft = display.querySelector('.display__time-left');
const displayEndTime = display.querySelector('.display__end-time');
let countdownTimer;

function formatTimeLeft(date) {
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

function formatEndTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formatedSeconds}`;
}

function displayTime(countdownTime) {
  clearInterval(countdownTimer);
  const timeNow = new Date();
  const timeInMs = timeNow.getTime();
  const endTime = new Date(timeInMs + countdownTime * 1000);
  displayEndTime.innerHTML = formatTimeLeft(endTime);
  displayTimeLeft.innerHTML = formatEndTime(countdownTime);
  let timeLeft = countdownTime;
  countdownTimer = setInterval(() => {
    timeLeft -= 1;
    displayTimeLeft.innerHTML = formatEndTime(timeLeft);
    if (timeLeft === 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);
}
function handleTimer(e) {
  const countdownTime = e.currentTarget.dataset.time;
  displayTime(countdownTime);
}
timerControls.forEach(timerButton =>
  timerButton.addEventListener('click', handleTimer)
);
timerForm.addEventListener('submit', event => {
  event.preventDefault();
  const minutes = event.target.minutes.value;
  displayTime(minutes * 60);
  event.target.reset();
});

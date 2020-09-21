const timer = document.querySelector('.timer');
const timerControls = timer.querySelectorAll('.timer__button');
const timerForm = timer.querySelector('#custom');
const display = document.querySelector('.display');
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
  const seconds = (minutes * 60) % 60;
  return `${minutes}:${seconds}`;
}

function displayTime(countdownTime) {
  clearInterval(countdownTimer);
  const timeNow = new Date();
  const timeInMs = timeNow.getTime();
  const endTime = new Date(timeInMs + countdownTime * 1000);
  display.querySelector('.display__end-time').innerHTML = formatTimeLeft(
    endTime
  );
  display.querySelector('.display__time-left').innerHTML = formatEndTime(
    countdownTime
  );
  let timeLeft = countdownTime;
  countdownTimer = setInterval(() => {
    timeLeft -= 1;
    display.querySelector('.display__time-left').innerHTML = formatEndTime(
      timeLeft
    );
  }, 1000);
  if (timeLeft <= 0) {
    console.log('chuj');
    clearInterval(countdownTimer);
    alert('end');
    return null;
  }
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

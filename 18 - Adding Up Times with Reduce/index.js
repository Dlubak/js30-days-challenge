const timeStamps = Array.from(document.querySelectorAll('[data-time]'));
const calculatedTime = timeStamps
  .map(function(value) {
    const [minutes, seconds] = value
      .getAttribute('data-time')
      .split(':')
      .map(parseFloat);
    return minutes * 60 + seconds;
  })
  .reduce(function(totalVal, nextValue) {
    return totalVal + nextValue;
  });
let secondsLeft = calculatedTime;
const hourCalculated = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const minutesCalculated = Math.floor(secondsLeft / 60);
const secondsCalculated = Math.floor(secondsLeft % 60);

console.log(hourCalculated, minutesCalculated, secondsCalculated);

window.onload = function() {
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  function setClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const secondDeg = (second / 60) * 360 + 90;
    const hourDeg = (hour / 12) * 360 + (minute / 60) * 30 + 90;
    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6 + 90;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }
  setInterval(setClock, 1000);
};

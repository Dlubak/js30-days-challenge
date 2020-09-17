const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', e => {
  const y = e.pageY - speed.offsetTop;
  const fillPercentage = y / speed.offsetHeight;
  const height = Math.round(fillPercentage * 100);
  const min = 0.5;
  const max = 4;
  const playbackRate = fillPercentage * (max - min) + min;
  const minimumFill = (min * 100) / max;
  bar.style.height = `${height < minimumFill ? minimumFill : height}%`;
  bar.textContent = `x${playbackRate.toFixed(1)}`;
  video.playbackRate = playbackRate;
});

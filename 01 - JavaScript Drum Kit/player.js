const keyboardKeys = document.querySelector('.keys');

const wait = (amount = 0) =>
  new Promise(resolve => setTimeout(resolve, amount));

async function handleKeys(event) {
  const { keyCode } = event;
  const pressedKey = keyboardKeys.querySelector(`[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!pressedKey) return;
  pressedKey.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  await wait(100);
  pressedKey.classList.remove('playing');
}

window.addEventListener('keyup', handleKeys);

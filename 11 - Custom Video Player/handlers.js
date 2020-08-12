import { elements } from './elements.js';
import { playVideo, pauseVideo, stopVideo } from './utils.js';

export function handlePlayButton(e) {
  // eslint-disable-next-line no-unused-expressions
  elements.video.paused ? playVideo() : pauseVideo();
}

export function handleSkipButtons(e) {
  const skipTime = e.currentTarget.getAttribute('data-skip');
  elements.video.currentTime += parseFloat(skipTime);
}

export function handleProgress() {
  const progressPercent =
    (elements.video.currentTime / elements.video.duration) * 100;
  elements.progress.style.flexBasis = `${progressPercent}%`;
}

export function handleInput(e) {
  const { name, value } = e.currentTarget;
  elements.video[name] = value;
}

export function handleKeyboard(e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 32:
      if (elements.playButton.classList.contains('playing')) {
        elements.playButton.classList.remove('playing');
        pauseVideo();
      } else {
        elements.playButton.classList.add('playing');
        playVideo();
      }
      break;
    case 83:
      elements.playButton.classList.remove('playing');
      stopVideo();
      break;
    default:
      break;
  }
}

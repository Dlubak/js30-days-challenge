import { elements } from './elements.js';

export async function playVideo() {
  elements.playButton.classList.add('playing');
  await elements.video.play();
}

export async function pauseVideo() {
  elements.playButton.classList.remove('playing');
  await elements.video.pause();
}

export async function stopVideo() {
  elements.playButton.classList.remove('playing');
  await elements.video.pause();
  elements.video.currentTime = 0;
}

export function calculatePercentage() {
  return calculatePercentage;
}

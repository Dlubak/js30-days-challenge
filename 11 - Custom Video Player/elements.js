const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const playerControls = player.querySelector('.player__controls');
const progress = playerControls.querySelector('.progress__filled');
const playButton = playerControls.querySelector('.player__button');
const skipButtons = playerControls.querySelectorAll('button[data-skip]');
const ranges = playerControls.querySelectorAll('.player__slider');

export const elements = {
  player,
  video,
  playerControls,
  progress,
  playButton,
  skipButtons,
  ranges,
};

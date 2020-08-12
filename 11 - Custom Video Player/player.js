import { elements } from './elements.js';
import {
  handlePlayButton,
  handleSkipButtons,
  handleProgress,
  handleInput,
  handleKeyboard,
} from './handlers.js';

elements.playButton.addEventListener('click', handlePlayButton, false);
elements.skipButtons.forEach(button =>
  button.addEventListener('click', handleSkipButtons)
);
elements.video.addEventListener('timeupdate', handleProgress);
elements.ranges.forEach(rangeInput =>
  rangeInput.addEventListener('input', handleInput)
);
window.addEventListener('keydown', handleKeyboard);

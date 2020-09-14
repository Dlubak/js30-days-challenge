// eslint-disable-next-line prefer-const
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const inputBox = options[2].value;
let rateValue = options[0].value;
let pitchValue = options[1].value;
let glos = '';
const voiceschanged = () => {
  window.speechSynthesis.getVoices().forEach(voice => {
    voices.push(voice);
  });
  voices.forEach(voice => {
    const element = document.createElement('option');
    element.value = voice.lang;
    element.textContent = voice.name;
    voicesDropdown.appendChild(element);
  });
};
speechSynthesis.onvoiceschanged = voiceschanged;
function speak() {
  const message = new SpeechSynthesisUtterance(options[2].value);
  message.voice = glos;
  message.pitch = pitchValue;
  message.rate = rateValue;
  window.speechSynthesis.speak(message);
}
speakButton.addEventListener('click', speak);
options[0].onchange = function() {
  pitchValue = options[0].value;
};
options[1].onchange = function() {
  rateValue = options[1].value;
};

voicesDropdown.onchange = function() {
  glos = voices.find(voice => voice.lang === voicesDropdown.value);
  console.log(glos);
};

let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const elements = {
  rate: options[0].value,
  pitch: options[1].value,
  input: options[2].value,
};
const msg = new SpeechSynthesisUtterance(elements.input);
function handleInput(event) {
  const { name, value } = event.currentTarget;
  elements[name] = value;
}

function populateVoiceList() {
  voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name} - ${voice.lang} </option>`
    )
    .join('');
}
function speak() {
  msg.rate = elements.rate;
  msg.pitch = elements.pitch;
  window.speechSynthesis.speak(msg);
}

function cancelSpeaking() {
  window.speechSynthesis.cancel();
}
speechSynthesis.onvoiceschanged = populateVoiceList;
options.forEach(option => option.addEventListener('input', handleInput));
speakButton.addEventListener('click', speak);
stopButton.addEventListener('click', cancelSpeaking);
voicesDropdown.onchange = function() {
  msg.voice = voices.find(voice => voice.name === voicesDropdown.value);
};

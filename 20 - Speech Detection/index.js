window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const words = document.querySelector('.words');
const recognition = new window.SpeechRecognition();
let p = document.createElement('p');
words.appendChild(p);
recognition.interimResults = true;
recognition.lang = 'en-US';

function handleSpeechRecognition(event) {
  const { transcript } = event.results[0][0];
  p.textContent = transcript;
  if (event.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
}

recognition.onresult = handleSpeechRecognition;
recognition.onend = recognition.start;

recognition.start();

const secretCode = 'cornify';
const keySequence = [];

function handleKeys(e) {
  keySequence.push(e.key);
  if (keySequence.length >= secretCode.length + 1) {
    keySequence.shift();
  }
  if (keySequence.join('').includes(secretCode)) {
    console.log('secret sequence found');
  }
}

window.addEventListener('keyup', handleKeys);

const secretCode = 'cornify';
const keySequence = [];

function handleKeys(e) {
  keySequence.push(e.key);
  keySequence.splice(
    -secretCode.length - 1,
    keySequence.length - secretCode.length
  );
  console.log(keySequence);
  if (keySequence.join('').includes(secretCode)) {
    console.log('secret sequence found');
  }
}

window.addEventListener('keyup', handleKeys);

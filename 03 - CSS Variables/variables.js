const optionsInputs = document.querySelectorAll('.controls input');
const image = document.querySelector('img');

function handleOption(event) {
  const dataSizing = event.currentTarget.dataset.sizing || '';
  const { name, value } = event.currentTarget;
  image.style.setProperty(`--${name}`, `${value}${dataSizing}`);
}

optionsInputs.forEach(input => input.addEventListener('input', handleOption));

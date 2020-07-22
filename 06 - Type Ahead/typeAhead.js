const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const inputBox = document.querySelector('.search-form');
const suggestionBox = document.querySelector('.suggestions');
let cities;

window.onload = async function fetchData() {
  const data = await fetch(endpoint);
  const json = await data.json();
  cities = json;
};

function populateSuggestions(input, clear) {
  if (clear) {
    suggestionBox.innerHTML = '';
    return;
  }
  const populate = Array.from(cities)
    .filter(
      element =>
        element.state.toLowerCase().includes(input) ||
        element.city.toLowerCase().includes(input)
    )
    .map(element => `<li>${element.city}, ${element.state}</li>`)
    .join('');
  suggestionBox.innerHTML = populate;
}

function handleInput(event) {
  const input = event.target.value;
  let clear;
  if (!input) clear = true;
  populateSuggestions(input, clear);
}

inputBox.addEventListener('input', handleInput);

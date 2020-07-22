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

function populateSuggestions(input) {
  if (!input) {
    suggestionBox.innerHTML = `
    <li>Filter for a city</li>
    <li>or a state</li>`;
    return;
  }
  const populate = Array.from(cities)
    .filter(
      element =>
        element.state.toLowerCase().includes(input) ||
        element.city.toLowerCase().includes(input)
    )
    .map(
      element => `
    <li>
      <span class="name"> ${element.city}, ${element.state}</span>
    </li>`
    )
    .join('');
  suggestionBox.innerHTML = populate;
}

function handleInput(event) {
  const input = event.target.value;
  populateSuggestions(input);
}

inputBox.addEventListener('input', handleInput);

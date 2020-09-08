const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];
// a | an | the
function cleanArticles(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.toLowerCase().split(' ');
  const containsArticle = articles.includes(words[0]);
  if (containsArticle) {
    return words.splice(1, words.length).join(' ');
  }
  return name;
}

document.querySelector('#bands').innerHTML = bands
  .sort((a, b) => cleanArticles(a).localeCompare(cleanArticles(b)))
  .map(
    item => `
    <li>${item}</li>`
  )
  .join('');

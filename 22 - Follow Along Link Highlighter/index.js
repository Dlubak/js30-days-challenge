const links = document.querySelectorAll('a');

links.forEach(link =>
  link.addEventListener('mouseover', function() {
    link.style.backgroundColor = 'white';
  })
);

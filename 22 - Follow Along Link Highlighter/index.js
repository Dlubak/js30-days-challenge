const links = document.querySelectorAll('a');
const higlightEl = document.createElement('span');
higlightEl.classList.add('highlight');
document.body.append(higlightEl);

links.forEach(link =>
  link.addEventListener('mouseenter', function() {
    const { height, width, left, top } = link.getBoundingClientRect();
    higlightEl.style.width = `${width}px`;
    higlightEl.style.height = `${height}px`;
    higlightEl.style.transform = `translate(${left - window.scrollX}px, ${top -
      window.scrollY}px)`;
  })
);

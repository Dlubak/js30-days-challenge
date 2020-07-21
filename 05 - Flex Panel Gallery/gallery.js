function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  let currentPanel;
  const panels = Array.from(gallery.querySelectorAll('.panel'));

  function handlePanels(panel) {
    if (currentPanel) {
      if (currentPanel !== panel) currentPanel.classList.remove('open');
    }
    panel.classList.toggle('open');
    currentPanel = panel;
  }

  panels.forEach(panel =>
    panel.addEventListener('click', e => handlePanels(e.currentTarget))
  );
}

const panelGallery = Gallery(document.querySelector('.panels'));

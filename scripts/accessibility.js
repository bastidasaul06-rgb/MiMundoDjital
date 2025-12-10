let fontSizeMultiplier = 1;

const DOM = {
  toggleAccessibility: document.getElementById('toggleAccessibility'),
  accessibilityMenu: document.getElementById('accessibilityMenu'),
  btnIncrease: document.getElementById('btnIncrease'),
  btnDecrease: document.getElementById('btnDecrease'),
  btnReset: document.getElementById('btnReset'),
  btnContrast: document.getElementById('btnContrast'),
  btnDarkMode: document.getElementById('btnDarkMode'),
};

DOM.toggleAccessibility.addEventListener('click', function() {
  const isHidden = DOM.accessibilityMenu.hasAttribute('hidden');
  if (isHidden) {
    DOM.accessibilityMenu.removeAttribute('hidden');
    this.setAttribute('aria-expanded', 'true');
  } else {
    DOM.accessibilityMenu.setAttribute('hidden', '');
    this.setAttribute('aria-expanded', 'false');
  }
});

DOM.btnIncrease.addEventListener('click', function() {
  fontSizeMultiplier = Math.min(2, fontSizeMultiplier + 0.1);
  document.documentElement.style.fontSize = (16 * fontSizeMultiplier) + 'px';
});

DOM.btnDecrease.addEventListener('click', function() {
  fontSizeMultiplier = Math.max(0.8, fontSizeMultiplier - 0.1);
  document.documentElement.style.fontSize = (16 * fontSizeMultiplier) + 'px';
});

DOM.btnReset.addEventListener('click', function() {
  fontSizeMultiplier = 1;
  document.documentElement.style.fontSize = '16px';
});

DOM.btnContrast.addEventListener('click', function() {
  document.body.classList.toggle('high-contrast');
});

DOM.btnDarkMode.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

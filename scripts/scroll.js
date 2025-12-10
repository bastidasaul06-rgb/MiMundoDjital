(function() {
  const headerEl = document.querySelector('header');
  const SCROLL_THRESHOLD = 100;

  function onScrollHeader() {
    const sc = window.scrollY || window.pageYOffset;
    if (sc > SCROLL_THRESHOLD) {
      headerEl.classList.add('header-compact');
    } else {
      headerEl.classList.remove('header-compact');
    }
  }

  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();
})();

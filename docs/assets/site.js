const filters = document.querySelector('.filters');
if (filters) {
  filters.hidden = false;
  const projects = [...document.querySelectorAll('.project')];
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    projects.forEach(project => { project.hidden = button.dataset.filter !== 'all' && !project.dataset.tags.split(' ').includes(button.dataset.filter); });
    document.querySelector('#filter-result').textContent = `${projects.filter(project => !project.hidden).length} projects shown`;
  });
}

// Progressive enhancement only: every section remains visible without JavaScript.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.intro-band, .section-heading, .method-grid > div').forEach(section => {
    section.classList.add('reveal-ready');
    observer.observe(section);
  });
}

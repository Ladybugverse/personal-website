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

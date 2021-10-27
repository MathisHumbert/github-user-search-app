const html = document.querySelector('html');
const btn = document.querySelector('.form-btn');
const text = document.querySelector('.form-input');

function toggleHtmlColor() {
  if (html.classList.contains('dark')) html.classList.remove('dark');
  else html.classList.add('dark');
}

function toggleBtnColor(e) {
  if (e.target === text) btn.classList.add('active');
  else btn.classList.remove('active');
}

export { toggleHtmlColor, toggleBtnColor };

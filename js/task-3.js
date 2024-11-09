const el = document.querySelector('#name-input');
const nested = document.querySelector('#name-output');

el.addEventListener('input', event => {
  nested.textContent = event.target.value.trim() || 'Anonymous';
});

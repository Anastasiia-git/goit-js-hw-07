const btn = document.querySelector('.color-btn');
const background = document.querySelector('.color');
const text = document.querySelector('.color-span');

btn.addEventListener('click', handleClick);

function handleClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  text.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

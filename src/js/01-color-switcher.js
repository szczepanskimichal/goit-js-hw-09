const startBtnEl = document.querySelector('[data-start');
const stopBtnEl = document.querySelector('[data-stop');
let randomColorBg;

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

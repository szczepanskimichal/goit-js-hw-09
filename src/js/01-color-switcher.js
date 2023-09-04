const startBtnEl = document.querySelector('[data-start');
const stopBtnEl = document.querySelector('[data-stop');
let randomColorBg;

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//START
startBtnEl.addEventListener(
  'click',
  () => {
    document.body.style.backgroundColor = getRandomColor();
    console.log(getRandomColor());
    startBtnEl.disabled = true;
    stopBtnEl.disabled = false;
  },
  1000
);
//STOP
stopBtnEl.addEventListener('click', () => {
  clearInterval(randomColorBg);
  console.log('stopped');
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Btn = document.querySelector(`.change-color`);
const color = document.querySelector(`.color`);

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
};

Btn.addEventListener("click", changeColor);
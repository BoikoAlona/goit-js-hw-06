function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`input`);
const boxes = document.querySelector(`#boxes`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  amount = Number(input.value);
  for (let i = 0; i < amount; i++) {
    width += 10;
    height += 10;
    const newDiv = document.createElement(`div`);
    newDiv.innerText="test";
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    boxes.append(newDiv);
  }
}

function destroyBoxes() {
    boxes.innerHTML= ``;
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

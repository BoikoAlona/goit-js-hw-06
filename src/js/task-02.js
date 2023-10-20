const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 
const list = document.querySelector(`#ingredients`);
const ingredientsList = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  console.log(item);
  return item;
});
list.append(...ingredientsList);

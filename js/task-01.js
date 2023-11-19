const categories = document.querySelector(`#categories`);
const categoriesQuantity = categories.children;
console.log(`Number of categories: ${categoriesQuantity.length}`);
[...categoriesQuantity].forEach((element) => {
    const elementTitle = element.querySelector('h2').textContent;
    const listOfElements = element.querySelectorAll('li');
    const elementsQuantity = listOfElements.length;
console.log(`Category: ${elementTitle}`);
console.log(`Elements: ${elementsQuantity}`);
});

const input = document.querySelector(`#validation-input`);

input.addEventListener("blur", (event) => {
    if (Number(input.getAttribute(`data-length`)) === event.target.value.length) {
        input.classList.remove(`invalid`);
        input.classList.add(`valid`);
    } else
    {
        input.classList.add(`invalid`);
        input.classList.remove('valid');
}
});


const input = document.querySelector(`#validation-input`);

input.addEventListener("blur", (event) => {
    if (input.getAttribute(`data-length`) >= event.currentTarget.value.length) {
        input.classList.remove(`invalid`);
        input.classList.add(`valid`);
    } else
    {
        input.classList.add(`invalid`);
}
});

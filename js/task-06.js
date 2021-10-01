const inputDataLength = document.querySelector("[data-length]");
const inputValidation = document.querySelector("#validation-input");
const inputlength = inputDataLength.dataset.length;

inputValidation.addEventListener("change", cheсkInputLength);

function cheсkInputLength(event) {
  event.target.value.length == inputlength
    ? inputValidation.classList.add("valid") ||
      inputValidation.classList.remove("invalid")
    : inputValidation.classList.remove("valid") ||
      inputValidation.classList.add("invalid");
}

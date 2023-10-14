const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handlerKey);

function handlerKey(event) {
  if (input.value) {
    span.textContent = input.value;
  } else {
    span.textContent = "Anonymous";
  }
}

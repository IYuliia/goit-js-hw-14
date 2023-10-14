let counterValue = 0;

const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

counter.addEventListener("click", handlerClick);

function handlerClick(event) {
  console.log("click");
  if (event.target.dataset.action === "decrement") {
    counterValue -= 1;
  } else if (event.target.dataset.action === "increment") {
    counterValue += 1;
  }
  value.textContent = counterValue;
}

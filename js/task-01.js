const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2");
  const elements = item.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${elements.length}`);
});

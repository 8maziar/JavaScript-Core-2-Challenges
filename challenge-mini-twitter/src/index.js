const inputText = document.getElementById("input-text");
const form = document.querySelector("form");
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = inputText.value;
  if (value) {
    const elem = document.createElement("p");
    elem.innerText = value;
    list.appendChild(elem);
    inputText.value = "";
  }
});

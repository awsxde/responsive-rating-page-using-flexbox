let num = document.querySelectorAll(".num");
let submit = document.querySelector(".submit");
let main = document.querySelector(".main");
let sub = document.querySelector(".sub");
let message = document.querySelector(".message");

function unHidden(i, str) {
  i.classList.contains(`${str}`)
    ? i.classList.remove(`${str}`)
    : i.classList.add(`${str}`);
}

function clear(x) {
  [...num]
    .filter((n) => n !== x)
    .forEach((n) => n.classList.remove("selected"));
}

function rate() {
  return [...num].filter((n) => n.classList.contains("selected"))[0].innerText;
}

function showMessage(n) {
  message.innerHTML = `You selected ${n} out of 5`;
}

function display() {
  unHidden(main, "hidden");
  unHidden(sub, "hidden");
}

function numHandler(i) {
  unHidden(i, "selected");
  clear(i);
}

function submitHandler() {
  display();
  showMessage(rate());
}

num.forEach((i) => i.addEventListener("click", () => numHandler(i)));
submit.addEventListener("click", submitHandler);

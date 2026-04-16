const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

function showMessage() {
  if (input.value.trim() === "") {
    output.textContent = "Please enter something...";
    output.classList.remove("green");
    output.classList.add("red");
  } else {
    output.textContent = input.value;
    output.classList.remove("red");
    output.classList.add("green");
    input.value = "";
  }
}

btn.addEventListener("click", showMessage);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    showMessage();
  }
});

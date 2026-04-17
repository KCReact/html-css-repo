const body = document.querySelector("body");

const heading = document.querySelector(".heading");
const description = document.querySelector(".description");

const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const color = buttons[i].classList[1];

    body.style.backgroundColor = color;

    if (color === "black") {
      heading.style.color = "white";
      description.style.color = "white";
    } else {
      heading.style.color = "black";
      description.style.color = "black";
    }
  });
}

const reset = document.querySelector(".reset");

reset.addEventListener("click", function () {
  body.style.backgroundColor = "";
  heading.style.color = "black";
  description.style.color = "black";
});

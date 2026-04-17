const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const value = document.querySelector(".value");

function colorOfValue() {
  const counter = Number(value.textContent);

  if (counter === 0) {
    value.style.color = "black";
  } else if (counter > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "red";
  }
}

plus.addEventListener("click", function () {
  const counter = Number(value.textContent);
  value.textContent = counter + 1;
  colorOfValue();
});

minus.addEventListener("click", function () {
  const counter = Number(value.textContent);
  value.textContent = counter - 1;
  colorOfValue();
});

colorOfValue();

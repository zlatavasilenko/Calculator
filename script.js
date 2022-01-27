let number = document.querySelectorAll(".buttonNumber"),
  result = document.getElementById(".intotal"),
  clearBtn = document.querySelectorAll(".clearBtn"),
  decimalBtn = document.getElementById(".buttonNumberpoint"),
  operatorsBtn = document.querySelectorAll(".buttonOperator"),
  display = document.getElementByClassName(".display");

const numberPress = (number) => {
  if (display.value === "") {
    display.value = number;
  } else display.value += number;
};

number.forEach((number) => {
  number.addEventListiner("click", (event) => {
    numberPress(event.target.textContent);
  });
});

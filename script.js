let numbers = document.querySelectorAll(".buttonNumber"),
  result = document.querySelector(".intotal"),
  clearBtn = document.querySelectorAll(".clearBtn"),
  decimalBtn = document.querySelector(".buttonNumberpoint"),
  operatorsBtn = document.querySelectorAll(".buttonOperator"),
  display = document.querySelector(".display");
(memoryCurrentNumber = 0),
  (memoryNewNumber = false),
  (memoryPendingOperation = "");

const numberPress = (number) => {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if (display.value === "") {
      display.value = number;
    } else display.value += number;
  }
};

numbers.forEach((number) => {
  number.addEventListiner("click", (event) => {
    numberPress(event.target.textContent);
  });
});
memoryPendingOperation = op;
display.value = memoryCurrentNumber;

function operation(op) {
  let localOperationMemory = display.value;

  if (memoryNewNumber && memoryPendingOperation !== "=") {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === "+") {
      memoryCurrentNumber += +localOperationMemory;
    } else if (memoryPendingOperation === "-") {
      memoryCurrentNumber -= +localOperationMemory;
    } else if (memoryPendingOperation === "*") {
      memoryCurrentNumber *= +localOperationMemory;
    } else if (memoryPendingOperation === "/") {
      memoryCurrentNumber /= +localOperationMemory;
    } else {
      memoryCurrentNumber = +localOperationMemory;
    }
    display.value = memoryCurrentNumber;
    memoryPendingOperation = op;
  }
}

operatorsBtn.forEach((operat) => {
  operat.addEventListiner("click", (event) => {
    operation(event.target.textContent);
  });
});

const clearfuncction = (op) => {
  if (op === "C") {
    display.value = 0;
    memoryNewNumber = true;
  } else if (op === "CE") {
    display.value = 0;
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
    memoryPendingOperation = "";
  }
};

clearBtn.forEach((clear) => {
  clear.addEventListiner("click", (event) => {
    operation(event.target.textContent);
  });
});

function decimal() {
  let localDecimalMemory = display.value;
  if (memoryNewNumber) {
    localDecimalMemory = "0.";
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      localDecimalMemory += ".";
    }
  }
  display.value = localDecimalMemory;
}

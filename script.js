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
  number.addEventListener("click", (event) => {
    numberPress(event.target.textContent);
  });
});

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
    display.value = memoryCurrentNumber;
  }
}

operatorsBtn.forEach((operat) => {
  operat.addEventListener("click", (event) => {
    operation(event.target.textContent);
  });
});

const clearfuncction = (op) => {
  if (op === "C") {
    display.value = 0;
    memoryNewNumber = true;
    console.log("ptr")
  } else if (op === "CE") {
    display.value = 0;
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
    memoryPendingOperation = "";
  }
};

clearBtn.forEach((clear) => {
  clear.addEventListener("click", (event) => {
    clearfuncction(event.target.textContent);
  });
});

const decimal = () => {
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
};

decimalBtn.addEventListener("click", decimal);


const numberInputButtons = document.querySelectorAll("[data-input]");
const operationInputButton = document.querySelector("[data-input-operation]");
const equalButton = document.querySelector("[data-equal]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const answerButton = document.querySelector("[data-answer]");
const inputTextElement = document.querySelector("[data-input]");
const resultTextElement = document.querySelector("[data-result]");

class Calculator {
  constructor(inputTextElement) {
    this.inputTextElement = inputTextElement;
    this.clear();
  }

  clear() {
    this.inputText = "";
    this.resultText = "";
  }

  delete() {
    this.inputText = this.inputText.toString().slice(0, -1);
  }

  enterValue(value) {
    this.inputText = this.inputText.toString() + value.toString();
  }

  enterOperation(operation) {}

  compute() {
    let computation;
  }

  updateDisplay() {
    this.inputTextElement.innerText = this.inputText;
  }
}
calculator = new Calculator(inputTextElement);

numberInputButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.enterValue(button.innerText);
    calculator.updateDisplay();
  });
});

operationInputButton.addEventListener("click", (button) => {
  calculator.enterOperation(button.innerText);
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

equalButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

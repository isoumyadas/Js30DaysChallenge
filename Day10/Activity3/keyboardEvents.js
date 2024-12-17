const inputField = document.querySelector("input");
const displayParagraph = document.querySelector("#displayValue");

function keyPressed(e) {
  console.log(`Key pressed: ${e.key}`);
}

function displayCurrentValue() {
  displayParagraph.textContent = inputField.value;
}

inputField.addEventListener("keydown", keyPressed);

inputField.addEventListener("keyup", displayCurrentValue);

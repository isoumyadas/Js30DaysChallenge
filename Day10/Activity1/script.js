// Task 1

const changeText = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  changeText.textContent = "Inquliab Zindabad!";
});

// ^ Try to use this approach
// const changeText = document.querySelector("p");
// const button = document.querySelector("button");

// function updateText() {
//   changeText.textContent = "Inquilab Zindabad!";
// }

// button.addEventListener("click", updateText);

// Task 2
const imageTag = document.querySelector("img");
imageTag.style.opacity = "1";

imageTag.addEventListener("dblclick", (e) => {
  if (imageTag.style.opacity === "0") {
    imageTag.style.opacity = "1";
  } else {
    console.log("ook");
    imageTag.style.opacity = "0";
  }
});

// ^ why opacity is good approach? =>  Unlike visibility: hidden, setting opacity: 0 keeps the element fully interactive (including event handling).

// ^ Once visibility is set to hidden the eventListener can't listen the dblclick event. To toggle back visible.

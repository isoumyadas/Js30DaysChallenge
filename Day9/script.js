console.log("Activity 1");

//Task 1

const changeTextContent = document.querySelector("#changeTextContent");
changeTextContent.textContent = "Zimmy Youtube";

//Task 2

const changeBgColor = document.querySelector(".changeBgColor");
changeBgColor.style.backgroundColor = "lightgreen";

console.log("Activity 2");

//Task 3

const createDiv = document.createElement("div");
createDiv.textContent = "Hey Harry!";
document.body.appendChild(createDiv);

// Task 4

const addingLi = document.querySelector("#addNewLi");
const newLi = document.createElement("li");
newLi.textContent = "Example 5";
addingLi.appendChild(newLi);

// ^You could do this like this too.
function addNewListItem(uLId, textContent) {
  const addingLi = document.querySelector(`#${uLId}`);
  if (addingLi) {
    const newLi = document.createElement("li");
    newLi.textContent = textContent;
    addingLi.appendChild(newLi);
  } else {
    console.error(`Element with ID '${uLId}' not found.`);
  }
}
addNewListItem("addNewLi", "Example 6");
// ^ This is reusable and best to use

console.log("===============Activity 3 ====================");

//Task 5

const remvoeHtwoElement = document.querySelector("h2");
remvoeHtwoElement.remove();

// Task 6
const lastElement = addingLi.lastElementChild;
lastElement.remove();

// ^ or you can do like this
// addingLi.removeChild(addingLi.lastElementChild);

console.log("============= Activity 4 ====================");

//Task 7
const changeImg = document.querySelector("#changeImg");
changeImg.setAttribute(
  "src",
  "https://images.pexels.com/photos/29022983/pexels-photo-29022983/free-photo-of-coffee-and-cake-with-chestnut-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
);

//^ I can use this method too.
// const changeImg = document.querySelector("#changeImg");
// changeImg.src =
//   "https://images.pexels.com/photos/29022983/pexels-photo-29022983/free-photo-of-coffee-and-cake-with-chestnut-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

// Task 8
// const addAndRemove = document.querySelector("h3");
// addAndRemove.setAttribute("class", "taskEight");
// addAndRemove.removeAttribute("class");

//^ Better approach
const addAndRemove1 = document.querySelector("h3");

addAndRemove1.classList.add("taskEight");

setTimeout(() => {
  addAndRemove1.classList.remove("taskEight");
}, 9000);

// ^ Why to use above approach for classes

// ^ Chaining
// ^ You can add or remove multiple classes in one go: classList.add("class1", "class2").

// ^ Avoids Overwriting:
// ^ setAttribute replaces any existing classes, while classList allows you to  add/remove classes without affecting others.

// ^ Toggling:
// ^ You can toggle a class with classList.toggle("className").

console.log("==================== Activity 5 ========================");

// Task 9
const changeTextToName = document.querySelector("#changeTextToName");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  changeTextToName.textContent = "Hello User Welcome to Dashbooard!";
});

// Task 10
changeTextToName.addEventListener("mouseover", (e) => {
  e.preventDefault();

  changeTextToName.classList.add("hover-border");
});

changeTextToName.addEventListener("mouseout", (e) => {
  changeTextToName.classList.remove("hover-border");
});

// ^ If you need to understand delegation: https://www.freecodecamp.org/news/event-delegation-javascript/

// ^ What is Event Delegation?

// ^ In event delegation, you attach an event listener to a parent element rather than individual child elements.
// ^ It works because events bubble up from the child element to its parent, so the parent can "catch" the event using event.target.

// ^ This is particularly useful for:

// ^ Dynamic elements: Elements added to the DOM after the event listener has been set.
// ^ Performance: Avoids attaching listeners to multiple child elements.

//Task 1

const div = document.querySelector("div");

function giveTextName(e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerText);
  }
}

div.addEventListener("click", giveTextName);

// ^ you can use this method too.
// const div = document.querySelector("div");

// function giveTextName(e) {
//   const clickedItem = e.target.closest("li"); // Ensure only <li> is targeted
//   if (clickedItem) {
//     console.log(clickedItem.textContent); // Logs the text content of the <li>
//   }
// }

// div.addEventListener("click", giveTextName);

//Task 2
const addNewTask = document.querySelector("button");
const allList = document.querySelector("#allList");
let counter = 4;

function newTask() {
  const newTaskLi = document.createElement("li");
  newTaskLi.textContent = `Task ${counter++}`;
  allList.appendChild(newTaskLi);
}

addNewTask.addEventListener("click", newTask);

// task 7

const submitData = document.querySelector("#submitData");
const nameField = document.querySelector("#name");
const passwordField = document.querySelector("#password");
const selectDropdown = document.querySelector("#selectDropdown");
const newPara = document.querySelector("p");

function defaultSubmission(e) {
  const name = nameField.value;
  const password = passwordField.value;

  e.preventDefault();

  console.log(name, password);
}

// ^ You can do use this approach | Best approach:
// ^ View this doc for understanding: https://developer.mozilla.org/en-US/docs/Web/API/FormData

// function handleSubmit(event) {
//   event.preventDefault(); // Prevent default form submission

//   const formData = new FormData(submitData);
//   const name = formData.get("name");
//   const password = formData.get("password");

//   console.log("Name:", name);
//   console.log("Password:", password);
// }

// Here we created fucntion for change event listener.
function displaySelectedValue(e) {
  e.preventDefault();
  newPara.textContent = e.target.value;
}

submitData.addEventListener("submit", defaultSubmission);
selectDropdown.addEventListener("change", displaySelectedValue);

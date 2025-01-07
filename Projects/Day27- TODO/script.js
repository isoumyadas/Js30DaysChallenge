const taskTitle = document.querySelector("#taskTitle");
const taskDate = document.querySelector("#taskDate");
const taskDescription = document.querySelector("#taskDescription");
const addTask = document.querySelector("#addTask");
const addTaskInput = document.querySelector("#addTaskInput");
const taskList = document.querySelector(".taskList");

const tasks = [];
function createTask({ title, dueDate, description }) {
  tasks.push({ title, dueDate, description });

  console.log("Tasks: ", tasks);

  listTasks(tasks);

  taskTitle.value = "";
  taskDescription.value = "";
  taskDate.value = "";
}

addTask.addEventListener("click", (e) => {
  e.preventDefault();

  title = taskTitle.value.trim();
  dueDate = taskDate.value;
  description = taskDescription.value.trim();

  if (title && dueDate && description) {
    createTask({ title, dueDate, description });
  } else {
    console.error("Some Fields are missing");
  }
});

function listTasks(tasks) {
  tasks.forEach((task, index) => {
    const taskContainer = document.createElement("div");
    taskContainer.id = "taskContainer";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "cb";

    let label = document.createElement("label");
    label.id = "data";

    label.innerHTML = `
    
    <p>${task.title}</p>
    <p>${task.description}</p>
    <p>${task.dueDate}</p>
    <img id=${"edit"} src =${"./img/pen.png"} width=${"15px"} height=${"15px"} >
    <img id=${"delete"} src =${"./img/bin.png"} width=${"15px"} height=${"15px"} >

    `;

    cb.value = label;

    taskContainer.appendChild(cb);
    taskContainer.appendChild(label);

    taskList.appendChild(taskContainer);

    cb.addEventListener("change", () => {
      if (cb.checked) {
        label.style.textDecoration = "line-through";
      } else {
        label.style.textDecoration = "none";
      }
    });

    // edit button

    const editBtn = document.querySelector("#edit");

    editBtn.addEventListener("click", (e) => {
      updateTask(task, index);
    });

    //deleteButton

    const deleteBtn = document.querySelector("#delete");
    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });
  });
}

function updateTask(task, index) {
  const popup = document.createElement("div");
  popup.id = "myPopup";
  popup.classList.add("popup");

  popup.innerHTML = `
  
     <div class="popup-content">
      <h3>Edit Task</h3>
      <label>Title:</label>
      <input type="text" id="edit-title" value="${task.title}">
      <label>Description:</label>
      <textarea id="edit-description">${task.description}</textarea>
      <label>Due Date:</label>
      <input type="date" id="edit-dueDate" value="${task.dueDate}">
      <div class="popup-buttons">
        <button id="save">Save</button>
        <button id="cancel">Cancel</button>
      </div>
    </div>
  
  `;

  document.body.appendChild(popup);

  // Add event listeners for Save and Cancel buttons
  const saveBtn = popup.querySelector("#save");
  const cancelBtn = popup.querySelector("#cancel");

  // Save changes
  saveBtn.addEventListener("click", () => {
    // Update the task object
    task.title = document.querySelector("#edit-title").value;
    task.description = document.querySelector("#edit-description").value;
    task.dueDate = document.querySelector("#edit-dueDate").value;

    // Update the tasks array and re-render
    tasks[index] = task;
    listTasks(tasks);

    // Remove the popup
    document.body.removeChild(popup);
  });

  // Cancel edit
  cancelBtn.addEventListener("click", () => {
    // Remove the popup
    document.body.removeChild(popup);
  });
}

// Delete task
function deleteTask(index) {
  // Remove the task from the tasks array
  tasks.splice(index, 1);

  // Re-render the tasks list
  listTasks(tasks);
}

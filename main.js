const allBoxes = document.querySelectorAll(".box");
const allTasks = document.querySelectorAll(".task");

allTasks.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

allBoxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();

    const curTask = document.querySelector(".is-dragging");

    box.appendChild(curTask);
  });
});

// Adding New Task
const form = document.querySelector("#add-form");
const input = document.querySelector("#to-do-input");
const todoBox = document.querySelector("#to-do");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newInputText = input.value;
  if (!newInputText) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerHTML = newInputText;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoBox.appendChild(newTask);
  input.value = "";
});

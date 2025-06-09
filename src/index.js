import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("todo-title").value;
    const dueDate = document.getElementById("todo-date").value;
    const priority = document.getElementById("todo-priority").value;

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");

    // Color based on priority
    if (priority === "high") {
      todoItem.style.backgroundColor = "#ffcccc";
    } else if (priority === "medium") {
      todoItem.style.backgroundColor = "#fff0b3";
    } else if (priority === "low") {
      todoItem.style.backgroundColor = "#ccffcc";
    }

    todoItem.innerHTML = `
      <span>${title} | Due: ${dueDate} | Priority: ${priority}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Delete functionality
    todoItem.querySelector(".delete-btn").addEventListener("click", () => {
      todoItem.remove();
    });

    todoList.appendChild(todoItem);
    form.reset();
  });
});

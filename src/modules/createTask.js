import Task from "./Task.js";
import completeTask from "./completeTask.js";

const inputField = document.querySelector(".taks-input");
const taskList = document.querySelector(".task-input-item");

const createTask = (event) => {
  Task.parseTasks();

  if (event.key === "Enter") {
    if (inputField.value === "") return;

    const newItem = new Task(inputField.value, Task.tasks.length + 1);
    Task.tasks.push(newItem);
    Task.storageManagement(Task.tasks);

    const html = newItem.buildTaskCard(newItem.description, newItem.index);
    taskList.insertAdjacentHTML("afterend", html);
    completeTask();
    inputField.value = "";
  }
};

export default createTask;

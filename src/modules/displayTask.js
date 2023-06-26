import Task from "./Task.js";
import completeTask from "./completeTask.js";

const tasksDisplay = () => {
  const inputs = document.querySelector(".task-input-item");

  Task.parseTasks();

  Task.tasks.forEach((task) => {
    const newItem = new Task(task.description, task.index);
    const html = newItem.buildTaskCard(task.description);
    inputs.insertAdjacentHTML("afterend", html);
  });
  completeTask();
};

export default tasksDisplay;

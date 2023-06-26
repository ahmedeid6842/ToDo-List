import menuIcon from "../img/menu-icon.svg";
import deleteIcon from "../img/icons8-trash.svg";
export default class Task {
  static tasks = [];
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }

  static storageManagement(task) {
    localStorage.setItem("taskList", JSON.stringify(task));
  }

  static rearrangement() {
    Task.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  }

  buildTaskCard(description, index) {
    return `
    <li class="task-item ${index}">
      <div class="task">
        <input type="checkbox" name="task" class="checkbox"> <input type="text" class="task-text" readonly value="${description}"/>
      </div>
      <div>
        <img src="${menuIcon}" alt="option-icon" class="menu-icon">
        <img src="${deleteIcon}" alt="delete-icon" class="delete-icon">
      </div>
    </li>
  `;
  }

  static parseTasks() {
    if (JSON.parse(localStorage.getItem("taskList"))) {
      Task.tasks = JSON.parse(localStorage.getItem("taskList"));
    }
  }
}

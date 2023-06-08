import menuIcon from '../img/menu-icon.svg';
import deleteIcon from '../img/icons8-trash.svg';
import Task from './Task.js';
import completeTask from './completeTask.js';

const inputs = document.querySelector('.task-input-item');

const tasksDisplay = () => {
  if (JSON.parse(localStorage.getItem('taskList'))) {
    Task.tasks = JSON.parse(localStorage.getItem('taskList'));
  }

  Task.tasks.forEach((task) => {
    const html = `
      <li class="task-item ${task.index}">
        <div class="task">
          <input type="checkbox" name="task" class="checkbox"> <input type="text" class="task-text" readonly value="${task.description}"/>
        </div>
        <div>
          <img src="${menuIcon}" alt="option-icon" class="menu-icon">
          <img src="${deleteIcon}" alt="delete-icon" class="delete-icon">
        </div>
      </li>
      `;
    inputs.insertAdjacentHTML('afterend', html);
  });
  completeTask();
};

export default tasksDisplay;
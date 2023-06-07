import menuIcon from '../img/menu-icon.svg';
import deleteIcon from '../img/icons8-trash.svg';
import Task from './Task.js';

const inputs = document.querySelector('.task-input-item');

const tasksDisplay = () => {

  if (JSON.parse(localStorage.getItem('taskList'))) {
    Task.tasks = JSON.parse(localStorage.getItem('taskList'));
  }

  Task.tasks.sort((a, b) => a.index - b.index).reverse().forEach((task) => {
    const html = `
      <li class="task-item">
        <div class="task">
          <input type="checkbox" name="task"> ${task.description}
        </div>
        <div>
          <img src="${menuIcon}" alt="option-icon" class="menu-icon">
          <img src="${deleteIcon}" alt="delete-icon" class="delete-icon">
        </div>
      </li>
      `;
    inputs.insertAdjacentHTML('afterend', html);
  });
};

export default tasksDisplay;
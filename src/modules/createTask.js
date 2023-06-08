import menuIcon from '../img/menu-icon.svg';
import deleteIcon from '../img/icons8-trash.svg';
import Task from './Task.js';
import completeTask from './completeTask.js';

const inputField = document.querySelector('.taks-input');
const taskList = document.querySelector('.task-input-item');

const createTask = (event) => {
  if (JSON.parse(localStorage.getItem('taskList'))) {
    Task.tasks = JSON.parse(localStorage.getItem('taskList'));
  }

  if (event.key === 'Enter') {
    if (inputField.value === '') return;

    const newItem = new Task(inputField.value, Task.tasks.length + 1);
    Task.tasks.push(newItem);
    Task.storageManagement(Task.tasks);

    const html = `
        <li class="task-item ${newItem.index}">
          <div class="task">
          <input type="checkbox" name="task" class="checkbox"> <input type="text" class="task-text" readonly value="${newItem.description}"/>
          </div>
          <div>
            <img src="${menuIcon}" alt="option-icon" class="menu-icon">
            <img src="${deleteIcon}" alt="delete-icon" class="delete-icon">
          </div>
        </li>
        `;
    taskList.insertAdjacentHTML('afterend', html);
    completeTask();
    inputField.value = '';
  }
};

export default createTask;
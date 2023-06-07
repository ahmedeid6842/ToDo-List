import tasks from './taskObjects.js';
import menuIcon from '../img/menu-icon.svg';

const inputs = document.querySelector('.task-input-item');

const tasksDisplay = () => {
  tasks.sort((a, b) => a.index - b.index).reverse().forEach((task) => {
    const html = `
      <li class="task-item">
        <div class="task">
          <input type="checkbox" name="task"> ${task.description}
        </div>
        <img src="${menuIcon}" alt="option-icon" class="menu-icon">
      </li>
      `;
    inputs.insertAdjacentHTML('afterend', html);
  });
};

export default tasksDisplay;
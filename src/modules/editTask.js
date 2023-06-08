import Task from './Task.js';
import saveIcon from '../img/save-icon.svg';

const editTask = (event) => {
  if (event.target.classList.contains('menu-icon')) {
    const taskIndex = event.target.parentNode.parentNode.className.split(' ')[1];
    const menuIcon = event.target;
    const taskInput = event.target.parentNode.parentNode.firstChild.nextSibling.childNodes[3];

    taskInput.removeAttribute('readonly');
    taskInput.focus();

    const spanIcon = document.createElement('span');
    const img = document.createElement('img');

    img.setAttribute('src', saveIcon);
    img.setAttribute('alt', 'Save Icon');
    img.classList.add('save-icon');

    spanIcon.appendChild(img);
    menuIcon.parentNode.insertAdjacentElement('afterbegin', spanIcon);
    menuIcon.classList.add('hidden');

    spanIcon.addEventListener('click', () => {
      const task = Task.tasks.find((t) => t.index === parseInt(taskIndex, 10));

      if (task) {
        task.description = taskInput.value;
      }

      Task.storageManagement(Task.tasks);
      taskInput.setAttribute('readonly', 'readonly');
      menuIcon.classList.remove('hidden');
      spanIcon.classList.add('hidden');
    });
  }
};

export default editTask;
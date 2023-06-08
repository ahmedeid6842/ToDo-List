import Task from './Task.js';

const boxChangeHanlder = (event) => {
  const targetID = parseInt(event.target.parentNode.parentNode.className.split(' ')[1], 10) - 1;
  if (event.target.checked) {
    event.target.nextElementSibling.classList.add('done');
    Task.tasks[targetID].completed = true;
    Task.storageManagement(Task.tasks);
  } else if (!event.target.checked) {
    event.target.nextElementSibling.classList.remove('done');
    Task.tasks[targetID].completed = false;
    Task.storageManagement(Task.tasks);
  }
};

const completeTask = () => {
  const checkBoxes = document.querySelectorAll('.checkbox');
  checkBoxes.forEach((box) => {
    box.addEventListener('change', (event) => {
      boxChangeHanlder(event);
    });
  });
};

export default completeTask;
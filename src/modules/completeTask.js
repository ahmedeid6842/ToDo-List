import Task from "./Task.js";

const completeTask = (event) => {
  const checkBoxes = document.querySelectorAll('.checkbox');
  checkBoxes.forEach((box) => {
    box.addEventListener('change', (event) => {
      boxChangeHanlder(event);
    })
  })
};

const boxChangeHanlder = (event) => {
  const targetID = parseInt(event.target.parentNode.parentNode.className.split(' ')[1]) - 1;
  if (event.target.checked) {
    event.target.nextElementSibling.classList.add('done');
    Task.tasks[targetID].completed = true;
  } else {
    event.target.nextElementSibling.classList.remove('done');
    Task.tasks[targetID].completed = false;
  }
  Task.storageManagement(Task.tasks);
}

export default completeTask;
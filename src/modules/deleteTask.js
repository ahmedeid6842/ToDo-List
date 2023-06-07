import Task from './Task.js';

const deleteTask = (event) => {
  const taskIndex = event.target.parentNode.parentNode.className.split(' ')[1];
  if (event.target.classList.contains('delete-icon')) {
    const task = event.target.parentNode.parentNode;

    Task.tasks = Task.tasks.filter((task) => task.index !== parseInt(taskIndex, 10))
      .map((task, index) => ({ ...task, index: index + 1 }));

    Task.storageManagement(Task.tasks);
    task.remove();
  }
};

export default deleteTask;
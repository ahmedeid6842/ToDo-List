import Task from './Task.js';
import tasksDisplay from './displayTask.js';

const reDisplayTask = () => {
  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach((task) => {
    task.remove();
  });

  tasksDisplay();
};

const clearCompletedTask = () => {
  const completedTasks = document.querySelectorAll('done');

  completedTasks.forEach((task) => {
    task.parentNode.parentNode.remove();
  });

  Task.tasks = Task.tasks.filter((task) => task.completed !== true)
    .map((task, index) => ({ ...task, index: index + 1 }));

  Task.storageManagement(Task.tasks);
  reDisplayTask();
};

export default clearCompletedTask;
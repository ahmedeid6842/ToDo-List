import './style.css';
import tasksDisplay from './modules/displayTask.js';
import createTask from './modules/createTask.js';
import deleteTask from './modules/deleteTask.js';
import editTask from './modules/editTask.js';
import completeTask from './modules/completeTask.js';
import clearCompletedTask from './modules/clearTask.js';

const clearButton = document.querySelector('.clear-btn');

document.addEventListener('keypress', createTask);
document.addEventListener('click', deleteTask);
document.addEventListener('click', editTask);
clearButton.addEventListener('click', clearCompletedTask);

tasksDisplay();
completeTask();
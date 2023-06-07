import './style.css';
import tasksDisplay from './modules/displayTask.js';
import createTask from './modules/createTask';
import deleteTask from './modules/deleteTask';
import editTask from './modules/editTask';

document.addEventListener('keypress', createTask);
document.addEventListener('click', deleteTask);
document.addEventListener('click', editTask);

tasksDisplay();
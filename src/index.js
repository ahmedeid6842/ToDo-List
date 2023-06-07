import './style.css';
import tasksDisplay from './modules/displayTask.js';
import createTask from './modules/createTask';
import deleteTask from './modules/deleteTask';

document.addEventListener('keypress', createTask);
document.addEventListener('click', deleteTask);

tasksDisplay();
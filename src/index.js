import './style.css';
import tasksDisplay from './modules/displayTask.js';
import createTask from './modules/createTask.js';
import deleteTask from './modules/deleteTask.js';
import editTask from './modules/editTask.js';
import completeTask from './modules/completeTask.js';

document.addEventListener('keypress', createTask);
document.addEventListener('click', deleteTask);
document.addEventListener('click', editTask);

tasksDisplay();
completeTask();
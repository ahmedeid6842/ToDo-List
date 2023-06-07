import './style.css';
import tasksDisplay from './modules/displayTask.js';
import createTask from './modules/createTask';
import deleteTask from './modules/deleteTask';
import editTask from './modules/editTask';
import completeTask from './modules/completeTask';

document.addEventListener('keypress', createTask);
document.addEventListener('click', deleteTask);
document.addEventListener('click', editTask);
document.addEventListener('click', completeTask);

tasksDisplay();
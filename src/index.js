import './style.css';
import tasksDisplay from './modules/taskDisplay.js';
import createTask from './modules/createTask';

document.addEventListener('keypress', createTask);
tasksDisplay();
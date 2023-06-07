import Task from "./Task";
import saveIcon from "../img/save-icon.svg"

const editTask = (event) => {
    const taskIndex = event.target.parentNode.parentNode.className.split(" ")[1]
    if (event.target.classList.contains('menu-icon')) {
        const menuIcon = event.target;
        const taskInput = event.target.parentNode.parentNode.firstChild.nextSibling.childNodes[3]
        console.log(taskInput);
        taskInput.removeAttribute('readonly');
        taskInput.focus();

        const spanIcon = document.createElement('span');
        const img = document.createElement('img');

        img.setAttribute('src', saveIcon);
        img.setAttribute('alt', 'Save Icon');
        img.classList.add('save-icon');

        spanIcon.appendChild(img);
        menuIcon.parentNode.insertAdjacentElement('afterbegin', spanIcon);
        menuIcon.classList.add('hidden');

        spanIcon.addEventListener('click', () => {
            const task = Task.tasks.find((t) => t.index === taskIndex);

            if (task) {
                task.description = taskInput.value;
                Task.storageManagement(Task.tasks);
            }

            taskInput.setAttribute('readonly', 'readonly');
            menuIcon.classList.remove('hidden');
            spanIcon.classList.add('hidden');
        })

    }
}

export default editTask;
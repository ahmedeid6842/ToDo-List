import Task from "./Task";

const deleteTask = (event) => {
    const taskIndex = event.target.parentNode.parentNode.className.split(" ")[1]
    if (event.target.classList.contains('delete-icon')) {
        const task = event.target.parentNode.parentNode;

        Task.tasks = Task.tasks.filter((task) => task.index != taskIndex)
            .map((task, index) => ({ ...task, index: index + 1 }));
        console.log(Task.tasks);
        Task.storageManagement(Task.tasks);
        task.remove();
    }
}

export default deleteTask;
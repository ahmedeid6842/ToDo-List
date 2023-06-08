import Task from "./Task";
import tasksDisplay from "./displayTask";

const clearCompletedTask = () => {
    const completedTasks = document.querySelectorAll('done');

    completedTasks.forEach((task) => {
        task.parentNode.parentNode.remove();
    });

    Task.tasks = Task.tasks.filter((task) => task.completed !== true)
        .map((task, index) => ({ ...task, index: index + 1 }));

    Task.storageManagement(Task.tasks);
    reDisplayTask();
}

const reDisplayTask = () => {
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach((task) => {
        task.remove();
    })

    tasksDisplay();
}
export default clearCompletedTask;
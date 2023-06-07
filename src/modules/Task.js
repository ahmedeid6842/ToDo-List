export default class Task {
  static tasks = [];
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }

  static storageManagement(task) {
    localStorage.setItem('taskList', JSON.stringify(task));
  }

  static rearrangement() {
    Task.tasks.forEach((task, index) => {
      task.index = index + 1;
    })
  }
}

const localStorageMock = (() => {
  const store = {};
  return {
    getItem: jest.fn((key) => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    editItem: jest.fn((key, updatedTask) => {
      const tasks = JSON.parse(store[key]);
      const index = tasks.findIndex((task) => task.index === updatedTask.index);
      tasks[index] = updatedTask;
      store[key] = JSON.stringify(tasks);
    }),
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
});

describe('editItem', () => {
  let tasks;

  beforeAll(() => {
    tasks = [
      { description: 'task1', index: 1, completed: false },
      { description: 'task2', index: 2, completed: false },
      { description: 'task3', index: 3, completed: false },
    ];
    localStorageMock.setItem('taskList', JSON.stringify(tasks));
  });

  it('should update the task with the matching index', () => {
    const updatedTask = { description: 'updated task', index: 2, completed: true };
    localStorageMock.editItem('taskList', updatedTask);

    const retrievedTasks = JSON.parse(localStorageMock.getItem('taskList'));
    expect(retrievedTasks).toEqual([
      { description: 'task1', index: 1, completed: false },
      { description: 'updated task', index: 2, completed: true },
      { description: 'task3', index: 3, completed: false },
    ]);
  });
});
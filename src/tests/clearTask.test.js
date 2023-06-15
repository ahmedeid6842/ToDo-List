const localStorageMock = (() => {
  const store = {};
  return {
    getItem: jest.fn((key) => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clearCompletedTasks: jest.fn((key) => {
      const tasks = JSON.parse(store[key]);
      const updatedTasks = tasks.filter((task) => !task.completed);
      store[key] = JSON.stringify(updatedTasks);
    }),
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
});

describe('clearCompletedTasks', () => {
  beforeEach(() => {
    const tasks = [
      { description: 'task1', index: 1, completed: true },
      { description: 'task2', index: 2, completed: false },
      { description: 'task3', index: 3, completed: true },
    ];
    localStorageMock.setItem('tasks', JSON.stringify(tasks));
  });
  it('should remove all completed tasks', () => {
    localStorageMock.clearCompletedTasks('tasks');
    const retrievedTasks = JSON.parse(localStorageMock.getItem('tasks') || '[]');
    const completedTasks = retrievedTasks.filter((task) => task.completed);
    expect(completedTasks).toEqual([]);
    expect(retrievedTasks).toEqual([{ description: 'task2', index: 2, completed: false }]);
  });
  it('should not remove anything if there are no completed tasks', () => {
    const tasks = [
      { description: 'task1', index: 1, completed: false },
      { description: 'task2', index: 2, completed: false },
      { description: 'task3', index: 3, completed: false },
    ];
    localStorageMock.setItem('tasks', JSON.stringify(tasks));
    localStorageMock.clearCompletedTasks('tasks');
    const retrievedTasks = JSON.parse(localStorageMock.getItem('tasks') || '[]');
    expect(retrievedTasks).toEqual(tasks);
  });
});
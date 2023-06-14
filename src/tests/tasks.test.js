import Task from '../modules/Task';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
});

describe('addItem', () => {
  beforeEach(() => {
    localStorageMock.setItem('taskList', JSON.stringify([]));
  });

  it('should add an item to localStorage', () => {
    const description = 'Test item';
    const index = 1;

    Task.storageManagement([{ description, index, completed: false }]);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'taskList',
      JSON.stringify([{ description, index, completed: false }])
    );
  });
});

describe('deleteItem', () => {
  beforeEach(() => {
    localStorageMock.setItem(
      'taskList',
      JSON.stringify([
        { description: 'Task 1', index: 1, completed: false },
        { description: 'Task 2', index: 2, completed: false },
      ])
    );
  });

  it('should remove an item from localStorage', () => {
    const description = 'Task 1';
    const index = 1;

    Task.storageManagement([{ description: 'Task 2', index: 1, completed: false }]);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'taskList',
      JSON.stringify([{ description: 'Task 2', index: 1, completed: false }])
    );
  });
});

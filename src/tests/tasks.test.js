import Task from '../modules/Task';
import tasksDisplay from '../modules/displayTask';

const localStorageMock = (() => {
    let store = {};
    return {
      getItem: jest.fn((key) => store[key]),
      setItem: jest.fn((key, value) => {
        store[key] = value.toString();
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
  })();
  
  const taskInputItemMock = {
    insertAdjacentHTML: jest.fn(),
  };
  
  const taskMock = {
    remove: jest.fn(),
  };
  
  const domMock = (() => {
    const tasks = [];
  
    return {
      querySelector: jest.fn().mockImplementation((query) => {
        switch (query) {
          case '.task-input-item':
            return taskInputItemMock;
          case '.task':
            return taskMock;
          default:
            return null;
        }
      }),
      querySelectorAll: jest.fn(() => tasks),
      tasks,
    };
  })();
  
  Object.defineProperty(global, 'localStorage', { value: localStorageMock });
  
  Object.defineProperty(global.document, 'querySelector', {
    value: domMock.querySelector,
  });
  
  Object.defineProperty(global.document, 'createElement', {
    value: jest.fn(() => ({})),
  });
  

  describe('addItem', () => {
    beforeEach(() => {
      localStorageMock.setItem('taskList', JSON.stringify([]));
      document.body.innerHTML = `<div class="task-input-item"></div>`;
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

  it('should update the DOM with the new item', () => {
    const description = 'Test item';
    const index = 1;

    tasksDisplay();

    expect(global.document.querySelector).toHaveBeenCalledWith('.task-input-item');
    expect(global.document.createElement).toHaveBeenCalledWith('li');
    expect(global.document.createElement).toHaveBeenCalledWith('div');
    expect(global.document.createElement).toHaveBeenCalledWith('input');
    expect(global.document.createElement).toHaveBeenCalledWith('input');
    expect(global.document.createElement).toHaveBeenCalledWith('img');
    expect(global.document.createElement).toHaveBeenCalledWith('img');
    expect(domMock.insertAdjacentHTML).toHaveBeenCalledWith(
      'afterend',
      expect.any(String)
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
      document.body.innerHTML = `<div class="task-input-item"></div>`;
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

  it('should update the DOM by removing the item', () => {
    const description = 'Task 1';
    const index = 1;

    tasksDisplay();

    expect(global.document.querySelector).toHaveBeenCalledWith('.task-input-item');
    expect(domMock.remove).toHaveBeenCalled();
  });
});

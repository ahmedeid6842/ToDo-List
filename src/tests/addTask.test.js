import Task from '../modules/Task.js';

const localStorageMock = (() => {
  let store = {};
  return {
    setItem: jest.fn((key, value) => {
      store[key] = value;
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
      JSON.stringify([{ description, index, completed: false }]),
    );
  });
});

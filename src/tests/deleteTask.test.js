const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => JSON.stringify(store[key])),
    setItem: jest.fn((key, value) => {
      store[key] = JSON.parse(value);
    }),
    removeItem: jest.fn((key, index) => {
      if (store[key]) {
        store[key] = store[key]
          .filter((item) => item.index !== index)
          .map((task, index) => ({ ...task, index: index + 1 }));
      }
    }),
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
});

describe('removeItem', () => {
  beforeEach(() => {
    const items = [
      { description: 'item1', index: 1, completed: false },
      { description: 'item2', index: 2, completed: false },
      { description: 'item3', index: 3, completed: false }
    ];
    localStorageMock.setItem('taskList', JSON.stringify(items));
  });

  it('should remove the item with the given index from the array stored under the given key', () => {
    localStorageMock.removeItem('taskList', 2);

    const retrievedItems = JSON.parse(localStorageMock.getItem('taskList') || '[]');
   
    expect(retrievedItems).toEqual([
      { description: 'item1', index: 1, completed: false },
      { description: 'item3', index: 2, completed: false }
    ]);
  });

  it('should not modify the array if there is no item with the given index', () => {
    localStorageMock.removeItem('taskList', 4);

    const retrievedItems = JSON.parse(localStorageMock.getItem('taskList') || '[]');
    expect(retrievedItems).toEqual([
      { description: 'item1', index: 1, completed: false },
      { description: 'item2', index: 2, completed: false },
      { description: 'item3', index: 3, completed: false }
    ]);
  });
});
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
    localStorageMock.setItem('items', JSON.stringify(items));
  });

  it('should remove the item with the given index from the array stored under the given key', () => {
    localStorageMock.removeItem('items', 2);

    const retrievedItems = JSON.parse(localStorageMock.getItem('items') || '[]');
    const removedItem = retrievedItems.find((item) => item.index === 2);
   
    expect(retrievedItems).toEqual([
      { description: 'item1', index: 1, completed: false },
      { description: 'item3', index: 2, completed: false }
    ]);
  });

  it('should not modify the array if there is no item with the given index', () => {
    localStorageMock.removeItem('items', 4);

    const retrievedItems = JSON.parse(localStorageMock.getItem('items') || '[]');
    expect(retrievedItems).toEqual([
      { description: 'item1', index: 1, completed: false },
      { description: 'item2', index: 2, completed: false },
      { description: 'item3', index: 3, completed: false }
    ]);
  });
});
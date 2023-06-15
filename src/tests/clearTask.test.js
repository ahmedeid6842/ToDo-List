import Task from '../modules/Task.js';

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

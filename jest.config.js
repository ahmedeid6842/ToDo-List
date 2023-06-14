module.exports = {
  transform: {
    '\\.(js|jsx)$': 'babel-jest',
    '\\.svg$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'svg'],
  testEnvironment: 'jsdom',
};

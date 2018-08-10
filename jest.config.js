module.exports = {
  rootDir: '.',
  roots: ['src/components'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  testURL: 'http:localhost',
};

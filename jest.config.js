module.exports = {
  // coverageDirectory: './__coverage__',
  rootDir: '.',
  roots: ['src/components'],
  moduleFileExtensions: ['js', 'jsx'],
  // collectCoverageFrom: [
  //   'src/@(components|util|styles)/**/*.{js,jsx}',
  //   '!src/@(components|util|styles)/**/index.{js,jsx}',
  //   '!src/@(components|util|styles)/**/*.story.{js,jsx}',
  //   '!**/node_modules/**',
  // ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    // '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  testURL: 'http:localhost',
};

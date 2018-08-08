const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.(js|jsx)$/,
    loaders: ['eslint-loader'],
    exclude: [/node_modules/],
    include: path.resolve(__dirname, '../'),
  });

  return defaultConfig;
};

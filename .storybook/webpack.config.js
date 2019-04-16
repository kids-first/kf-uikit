const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
 
  /* PostCSS Support */
  config.module.rules.push({
    test: /.css$/,
    include: path.resolve(__dirname, '../src'),
    use: [{ loader: 'postcss-loader', options: { config: { path: './' } } }],
  });

  config.module.rules.push({
    test: /\.(js|jsx)$/,
    loaders: [
      {
        loader: 'eslint-loader',
        options: {
          emitError: true,
          failOnError: true,
        },
      },
    ],
    include: path.resolve(__dirname, '../src'),
  });

  // Return the altered config
  return config;
};

const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // had to specifically override the rule at the index
  config.module.rules[3] = {
    test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
    include: path.resolve(__dirname, '../assets'),

    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]',
        },
      },
    ],
  };

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

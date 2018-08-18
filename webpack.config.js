const tailwindcss = require('tailwindcss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const pkg = require('./package.json');

module.exports = {
  entry: [path.join(__dirname, 'src', 'styles', 'index.css')],
  output: {
    path: path.join(__dirname, 'dist', pkg.version, 'styles'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${pkg.name}--${pkg.version}.css`,
      chunkFilename: `${pkg.name}--${pkg.version}.css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [tailwindcss('./.tmp/tailwind.babel.js'), require('autoprefixer')],
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
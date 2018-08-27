const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../src/'),
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loaders: [ {
          loader: 'eslint-loader',
           options: {
            emitError: true,
            failOnError: true
          },
        }],
        include: path.resolve(__dirname, '../src')
      }
    ]
  }
}

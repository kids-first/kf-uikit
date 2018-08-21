const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../src/css/'),
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  }
}

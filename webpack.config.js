const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './'),

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
    // publicPath: ''
  },
  mode: "development"
}
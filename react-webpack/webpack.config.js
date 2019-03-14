const path = require('path');
 
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('lib'),
    filename: 'index_bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}

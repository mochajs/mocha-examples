const path = require('path');
 
/**
Below we configure webpack to build a client-side bundle with the following instruction:
 - use the "babel-loader" module for preprocessing of ES6
 - in "development" mode so webpack will not use any built-in optimisations
 - start processing code from file "./src/index.jsx"
 - output bundle to "lib/index_bundle.js"
*/

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'index_bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}

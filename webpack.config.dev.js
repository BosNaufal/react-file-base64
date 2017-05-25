
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {

  entry: './src/js/components/app.js',

  output: {
    path: './public',
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      }
    ]
  }
};

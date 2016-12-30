
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {

  entry: './src/js/components/app.js',

  output: {
    path: './build',
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]

};

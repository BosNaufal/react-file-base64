
var webpack = require('webpack');
const minify = process.argv.indexOf('--minify') !== -1;

module.exports = {

  entry: './src/js/components/react-file-base64.js',

  output: {
    path: './build',
    filename: minify ? 'build.min.js' : 'build.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      }
    ]
  }
};

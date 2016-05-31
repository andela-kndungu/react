(function() {
  'use strict';

  // // To automatically produce the distribution html file
  // var HtmlWebpackPlugin = require('html-webpack-plugin');
  // var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  //   // Base html file
  //   template: __dirname + '/app/index.html',
  //
  //   // Name of output html file
  //   filename: 'index.html',
  //
  //   // Where to add the script element
  //   inject: 'body'
  // });

  // module.exports = {
  //   entry: ['./app/index.jsx'],
  //   ouput: {
  //     path: './dist/',
  //     filename: 'index.bundle.js'
  //   },
  //   module: {
  //     loaders: [{
  //       test: /.jsx?$/,
  //       include: './app',
  //       loader: 'babel-loader'
  //     }]
  //   },
  //   plugins: [HtmlWebpackPluginConfig]
  // };

  module.exports = {
    entry: ['./app/index.js'],
    output: {
      path: './dist',
      filename: 'index.bundle.js',
    },
    module: {
      loaders: [{
        test: /\.js$/,
        include: './src/',
        loader: 'babel-loader',
      }],
    },
  };
})();

(function() {
  'use strict';

  // To automatically produce the distribution html file
  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    // Base html file
    template: __dirname + '/app/index.html',

    // Name of output html file
    filename: 'index.html',

    // Where to add the script element
    inject: 'body'
  });

  module.exports = {
    entry: ['./app/index.js'],
    ouput: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js'
    },
    module: {
      loaders: [{
        test: /.jsx?$/,
        include: __dirname + 'app',
        loader: 'babel-loader'
      }]
    },
    plugins: [HtmlWebpackPluginConfig]
  };
})();

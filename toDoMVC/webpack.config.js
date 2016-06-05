var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
  entry: './js/app.js',
  output: {
    path: './js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'js'),
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};


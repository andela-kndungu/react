var path = require('path');

var config = {
	devtool: 'eval-source-map',
	entry: './src/app.jsx',
	output: {
		path: './dist/',
		filename: 'app.bundle.js'
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'src'),
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};

module.exports =  config;


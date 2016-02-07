var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry : {
		app : path.resolve(__dirname, 'app/main.js'),
		vendors : ['react', 'material-ui/lib/raised-button'] //todo: добавить автоматическую выверку используемых моделей
	},
	output : {
		path : __dirname + '/build',
		filename : "bundle.js"
	},
	module : {
		loaders : [{
				test : /app\/.+.js$/,
				loaders : ['babel'],
			}, {
				test : /\.css$/,
				loader : "style!css"
			}
		]
	},
	plugins : [
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
				screw_ie8 : true,
				// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
				warnings : false,
			}
		}),
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	]
};

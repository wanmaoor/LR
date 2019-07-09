const path = require('path');
module.exports = {
	entry: {
		index: './lib/index.tsx'
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'dist/lib'),
		library: 'LR',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /icons.+\.svg$/,
				loader: 'svg-sprite-loader',
			},
		]
	},
};
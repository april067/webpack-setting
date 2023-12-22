const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack Boilerplate',
			template: path.resolve(__dirname, './src/template.html'), // template file
			filename: 'index.html', // output file
		}),
		new CleanWebpackPlugin(),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		// clean: true,
	},
};

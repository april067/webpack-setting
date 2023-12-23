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
	module: {
		rules: [
			// JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			// Images
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			// Fonts and SVGs
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
		],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		// clean: true,
	},
};

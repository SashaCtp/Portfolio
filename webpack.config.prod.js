'use strict'

const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizePlugin = require('css-minimizer-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.join(process.cwd(), 'app', 'dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					}
				],
			},
			{
				test: /\.scss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},{
						loader: 'sass-loader'
					}
				],
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizePlugin(),
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			template: './src/html/index.html',
			publicPath: '/dist'
		})
	]
}
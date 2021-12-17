const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		"hello-world": "./src/hello-world.js",
		"example-img": "./src/img.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "",
	},
	mode: "development",
	devServer: {
		port: 9000,
		static: {
			directory: path.resolve(__dirname, "./dist"),
		},
		devMiddleware: {
			index: "index.html",
			writeToDisk: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 3 * 1024,
					},
				},
			},
			{
				test: /\.txt/,
				type: "asset/source",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/env"],
						plugins: ["@babel/plugin-proposal-class-properties"],
					},
				},
			},
			{
				test: /\.hbs$/,
				use: ["handlebars-loader"],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [
				"**/*",
				path.join(process.cwd(), "build/**/*"),
			],
		}),
		new HtmlWebpackPlugin({
			filename: "hello-world.html",
			chunks: "hello-world",
			title: "Hello World",
			template: "./src/page-template.hbs",
			description: "hello world",
		}),
		new HtmlWebpackPlugin({
			filename: "img.html",
			chunks: "example-img",
			title: "img",
			template: "./src/page-template.hbs",
			description: "img",
		}),
	],
};

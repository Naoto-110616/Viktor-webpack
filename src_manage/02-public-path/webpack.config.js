const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "http://some-cdn.com/",
	},
	mode: "none",
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				type: "asset/resource",
			},
		],
	},
};

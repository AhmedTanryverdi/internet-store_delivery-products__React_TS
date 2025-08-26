const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",

	entry: "./index.tsx",

	devServer: {
		open: true,
		port: 8080,
	},

	module: {
		rules: [
			{
				test: /\.(ts|js|tsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader",
					},
				],
			},
			{
				test: /\.s[ac]ss$/,
				exclude: /node_module/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
};

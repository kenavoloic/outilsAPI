const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const source = path.join(__dirname, "./src");
const distribution = path.join(__dirname, "./dist");

module.exports = {
    entry: path.join(source, "./index.js"),
    output: {
        path: distribution,
        filename: "./cca.[hash].js"
    },
    mode: "development",
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"]},
            {test: /\.css$/, use: ["style-loader", "css-loader"]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./public/index.html")
        })
    ]
};

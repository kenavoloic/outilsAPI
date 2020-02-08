const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const source = path.join(__dirname, './src');
const distribution = path.join(__dirname, './dist');

module.exports = {
    entry: path.join(source, './index.js'),
    output: {
        path: distribution,
        filename: './cca.[hash].js' //'main.js' //'./cca.[hash].js'
    },
    mode: 'development',
    module: {
        rules: [
            {test: /\.js$/i, exclude: /node_modules/, use: ['babel-loader']},
            {test: /\.css$/i, use: ['style-loader', 'css-loader']},
            {test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader']}
        ]
    },
    devtool: 'none', //'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html')
        })
    ]
};

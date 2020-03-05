const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');

const source = path.join(__dirname, './src');
const distribution = path.join(__dirname, './dist');

module.exports = {
    entry: path.join(source, './index.js'),
    output: {
        path: distribution,
        filename: './cca.[hash].js' //'main.js' //'./cca.[hash].js'
    },
    target: "web",
    mode: 'development',
    module: {
        rules: [
            {test: /\.js$/i, exclude: /node_modules/, use: ['babel-loader']},
            {
                test: /\.less$/i, 
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'less-loader', options: {
                            plugins: [
                                new CleanCSSPlugin({ advanced: true })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'none', //'cheap-source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, './public/index.html')     })
        //new HtmlWebpackPlugin()
    ]
};

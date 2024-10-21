const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const basicConfig = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        compress: true,
        port: 9000,
    },
};
const a = 0;
module.exports = basicConfig;

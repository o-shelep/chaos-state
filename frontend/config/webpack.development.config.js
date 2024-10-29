const { merge } = require("webpack-merge");
const basicConfig = require("./webpack.config");
const path = require("path");



const config = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",

                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: `[name]_[local]--[hash:base64:5]`,
                                namedExport: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ico|png|jpg|jpeg|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/[name][ext]",
                },
            },
        ],
    },
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
};

module.exports = merge(basicConfig, config);

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                             esModule: true, 
                        },
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {pretty: true}
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        }),
        new CssMinimizerPlugin(),
        new TerserWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin() , new TerserWebpackPlugin({})],
        },
}
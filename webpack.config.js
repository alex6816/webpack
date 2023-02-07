const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
      },
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
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: 'eslint-loader',
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        }),
        new StylelintPlugin({configFile: path.join(__dirname, '../.stylelintrc'),}),
        
    ],
}
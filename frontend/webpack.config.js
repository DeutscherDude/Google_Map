const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = function(_env, argv){
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        devtool: isDevelopment && "cheap-module-source-map",
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.(css|scss)$/,
                    use: ["style-loader", "css-loader"]
                }
            ],

        },
        plugins: [
            new HtmlWebpackPlugin({
              template: path.join(__dirname, "public", "index.html"),
        }),
            new Dotenv(),
        ],
        mode: 'development',
    };
};

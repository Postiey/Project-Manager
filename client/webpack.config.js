const { appendFile } = require("fs");
const path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    mode: "development",
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$|jsx/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        static: path.join(__dirname, "public")
    }
}
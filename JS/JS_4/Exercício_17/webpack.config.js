const path = require('path')

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        port: 8000
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    mode: 'production'
}
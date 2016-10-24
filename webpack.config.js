const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './index.ls'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'drag-queen.js'
    },
    module: {
        loaders: [
            {
                test: /.ls$/,
                exclude: /node_modules/,
                loaders: ['livescript-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ls']
    },
    plugins: []
};

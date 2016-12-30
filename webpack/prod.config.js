const webpack = require('webpack');
const WebpackConfig = require('webpack-config');
const path = require('path');

module.exports = new WebpackConfig.Config().extend('./webpack/base.config.js').merge({
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
    ],
    entry: {
        entry: [
            path.join(__dirname, '../src/entry.js')
        ]
    },
    output: {
        publicPath: 'https://faofao931013.github.io/react-hot/dist/',
    },
});
import webpack from 'webpack';
import Config from 'webpack-config';
import path from 'path';

const prodConfig = new Config().extend('./webpack/base.config.js').merge({
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

export default prodConfig;
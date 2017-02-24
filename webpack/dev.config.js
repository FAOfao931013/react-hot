import webpack from 'webpack';
import Config from 'webpack-config';
import path from 'path';

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

const devConfig = new Config().extend('./webpack/base.config.js').merge({
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    entry: {
        entry: [
            hotMiddlewareScript,
            path.join(__dirname, '../src/entry.js')
        ]
    },
    output: {
        publicPath: '/static/',
    },
});

export default devConfig;
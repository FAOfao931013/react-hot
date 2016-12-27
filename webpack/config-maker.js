const WebpackConfig = require('webpack-config');
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const paths = {
    src: path.join(__dirname, '../src'),
    components: path.join(__dirname, '../src/components'),
};

const config = {

    devtool: 'inline-source-map',

    entry: {
        vendor: ['react', 'react-dom', 'react-router'],
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        publicPath: '/static/',
        chunkFilename: '[name].[chunkhash:5].chunk.js',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ],

    module: {
        loaders: [
            // jsx
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            //js
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            // less
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader!postcss-loader"
            },
            //css
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
        ]
    },

    postcss: [ autoprefixer({ browsers: ['last 7 versions'] }) ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'src': paths.src,
            'components': paths.components,
        }
    },
};

module.exports = new WebpackConfig.Config().merge(config);
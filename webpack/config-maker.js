const WebpackConfig = require('webpack-config');
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const px2rem = require('postcss-px2rem');

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
            //less
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            //css
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            //file
            {
                test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
        ]
    },

    postcss() {
        return [
            autoprefixer({ browsers: ['last 7 versions'] }),
            px2rem({ remUnit: 75 }),
        ];
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'src': paths.src,
            'components': paths.components,
        }
    },
};

module.exports = new WebpackConfig.Config().merge(config);
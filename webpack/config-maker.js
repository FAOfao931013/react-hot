var WebpackConfig = require('webpack-config');
var path = require('path');
var autoprefixer = require('autoprefixer');

var paths = {
    src: path.join(__dirname, '../src'),
    components: path.join(__dirname, '../src/components'),
};

var config = {

    devtool: '#source-map',

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        publicPath: '/static/'
    },

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
                loaders: [
                    {
                        test: /\.css$/,
                        exclude: /\.useable\.css$/,
                        loader: "style-loader!css-loader",
                    },
                    {
                        test: /\.useable\.css$/,
                        loader: "style-loader/useable!css-loader"
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }

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
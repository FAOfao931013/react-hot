import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack/dev.config.js';

const app = express();
const compiler = webpack(config);

app.use(express.static(path.join(__dirname, '/')));

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(8092, 'localhost', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening at http://localhost:8092');
    }
});


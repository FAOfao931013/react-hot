import webpack from 'webpack';
import config from './webpack/prod.config.js';

const bundler = webpack(config);

bundler.run((err, stats) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(stats.toString({
		chunks: false, // Makes the build much quieter
		colors: true // Shows colors in the console
	}));
});
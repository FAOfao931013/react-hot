import webpack from 'webpack';
import config from './webpack/prod.config.js';
import fs from 'fs';

const bundler = webpack(config);
const distUrl = './dist';

const files = fs.readdirSync(distUrl);

files.forEach(file => {
	let fileUrl = distUrl + '/' + file;
	fs.unlink(fileUrl, function(err) {
		if (err) {
			throw err;
		}
	});
});

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
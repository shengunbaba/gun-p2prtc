const webpack = require('webpack');
const devCon = require('./webpack.config');
const compiler = webpack(devCon);

compiler.watch({
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 2000,
    'info-verbosity': 'verbose',
}, (err, stats) => {

    let json = stats.toJson("minimal");
    if (json.errors) {
        json.errors.forEach(item => {
            console.log(item);
        });
    }

    console.log('compile complete');
});

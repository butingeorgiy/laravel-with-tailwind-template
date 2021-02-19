const path = require('path');

module.exports = {
    entry: './resources/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {loader: "babel-loader"},
                    "source-map-loader"
                ]
            }
        ]
    }
};

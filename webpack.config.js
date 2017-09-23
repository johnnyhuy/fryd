// Require
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const webpack = require('webpack');

// Plugins
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    allChunks: true
});
const notifier = new WebpackNotifierPlugin()
const jQuery = new webpack.ProvidePlugin({
    $: "jquery",
    jquery: "jQuery",
    "windows.jQuery": "jquery"
});
const uglify = new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
})

module.exports = {
    entry: ['./src/js/main.js', './src/sass/main.scss'],
    output: {
        path: path.resolve(__dirname, 'src/assets'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: extractSass.extract([
                'css-loader',
                'sass-loader'
            ])
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        extractSass,
        notifier,
        // uglify,
        jQuery,
    ]
};
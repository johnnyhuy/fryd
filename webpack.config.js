// Require
const Path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const Webpack = require('webpack');

// Plugins
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    allChunks: true
});
const notifier = new WebpackNotifierPlugin({
    alwaysNotify: true
})
const jQuery = new Webpack.ProvidePlugin({
    $: "jquery",
    jquery: "jQuery",
    "windows.jQuery": "jquery"
});
const uglify = new Webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})

module.exports = {
    entry: ['./src/js/main.js', './src/sass/main.scss'],
    output: {
        path: Path.resolve(__dirname, 'src/assets'),
        filename: 'bundle.js',
        publicPath: './'
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
        },
        {
            test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000' 
        }]
    },
    plugins: [
        extractSass,
        notifier,
        // uglify,
        jQuery,
    ],
    resolve: {
        alias: {
            "TweenLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
            "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
            "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
            "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
        }
    }
};
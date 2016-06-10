// Node modules
const path = require('path');

// Webpack tasks
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const autoprefixer = require('autoprefixer');

// Webpack plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configs
const dev = require('./config/dev.config');
const prod = require('./config/prod.config');

// Paths
const PATH = {
    build: path.join(__dirname, 'build'),
    source: path.join(__dirname, 'source')
};

// Common config
const common = {
    context: PATH.source,
    entry: 'main.js',
    output: {
        path: PATH.build,
        filename: 'scripts/main.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass'])
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file?name=images/[name].[hash].[ext]'
            }
        ]
    },

    postcss: function () {
        return [autoprefixer];
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(PATH.source, 'index.html'),
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(PATH.source, 'static'),
                to: PATH.build
            }
        ])
    ],

    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: [
            'node_modules',
            'bower_components'
        ],
        root: PATH.source
    }
};

let config;

switch (process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(
            prod.before({
                cleanPath: [PATH.build],
                cleanRoot: path.resolve(__dirname)
            }),
            common,
            prod.after({
                outputPath: PATH.build
            })
        );
        break;
    default:
        config = merge(
            common,
            dev.after({
                contentBase: PATH.build,
                host: process.env.HOST,
                port: process.env.PORT || 8080
            })
        );
}

module.exports = validate(config);
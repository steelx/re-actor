const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.before = (args) => {
    return {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new CleanWebpackPlugin(args.cleanPath, {
                root: args.cleanRoot,
                verbose: true,
                dry: false
            })
        ]
    }
};

exports.after = (args) => {
    return {
        output: {
            path: args.outputPath,
            filename: 'scripts/[name].[chunkhash].js'
        },
        plugins: [
            new ExtractTextPlugin('styles/[name].[chunkhash].css'),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ],
        devtool: 'source-map'
    };
};
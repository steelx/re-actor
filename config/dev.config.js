const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.after = function (args) {
    return {
        devServer: {
            contentBase: args.contentBase,

            historyApiFallback: true,

            compress: true,

            hot: true,
            inline: true,
            host: args.host, // Defaults to `localhost`
            port: args.port, // Defaults to 8080

            quiet: false,
            noInfo: false,
            lazy: false,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            stats: {colors: true}
        },
        plugins: [
            new ExtractTextPlugin('styles/[name].css'),
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ],
        devtool: 'eval-source-map'
    };
};
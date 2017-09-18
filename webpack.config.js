// needed to export styles to separate file instead of inline text.
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//webpack-dev-server 2 path things
const path = require('path');

module.exports = {
    entry: './src/scss/main.scss',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'empty.js'
    },
    plugins: [new ExtractTextPlugin('fleck.css')],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 'sass-loader'
                    ],
                    publicPath: './dist'
                })
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        stats: "errors-only"
    }
};
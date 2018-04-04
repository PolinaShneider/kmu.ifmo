const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './public/src/entry.js',
    output: {
        filename: './public/build/bundle.js',
        library: 'kmu'
    },
    module: {
        rules: [
            /**
             * Process CSS
             */
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: 1,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ])
            },

            /**
             * Process JS files
             */
            {
              test : /\.js$/,
              use: [
                {
                    loader: 'babel-loader',
                    query: {
                        presets: [ 'env' ],
                    }
                },
                {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                }
              ]
            }
        ]
    },
    plugins: [
        /** Build separated styles bundle */
        new ExtractTextPlugin({
            filename: './public/build/bundle.css',
            allChunks: true,
        }),
        /** Minify JS and CSS */
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    watch: true,
    devtool: 'source-map'
};

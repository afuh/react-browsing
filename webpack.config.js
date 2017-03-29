var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        // 'babel-polyfill',
        './src/main.js'
    ],
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
                options: { presets: ['es2015', 'react'] }
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader','postcss-loader', 'sass-loader'],
                    publicPath: '/dist'
                  })
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Proyecto nuevo',
        template: 'src/index.html'
      }),
      new ExtractTextPlugin({
         filename: 'main.css',
         disable: false,
         allChunks: true
       }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        open: false,
        server: { baseDir: ['dist'] }
    })
    ]
};

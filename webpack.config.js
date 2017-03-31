var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
                options: { presets: ['es2015', 'react'] }
            },
            {
                test: /\.(sass|scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader','postcss-loader', 'sass-loader'],
                    publicPath: '/dist'
                  })
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Restaurant',
        template: 'src/index.html'
        // favicon: 'src/assets/favicon.ico'
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

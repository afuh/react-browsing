const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require("path");

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
  }
};

const isProd = process.env.NODE_ENV === "production";
const cssDev = ['style-loader', 'css-loader',postcss, 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader', postcss, 'sass-loader'],
                publicPath: '/dist'
              });


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: { presets: ['env', 'react'] }
      },
      {
        test: /\.(s+(a|c)ss|css)$/,
        use: isProd ? cssProd : cssDev
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=images/[hash:6].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: false,
    overlay: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'React brwosing',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.html',
      }),
      new ExtractTextPlugin({
         filename: 'main.css',
         disable: !isProd,
         allChunks: true
       }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
  ]
};

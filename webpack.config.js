/* global module, require, __dirname */

'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    pathinfo: true
  },

  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: [
      //     {
      //       loader: 'eslint-loader',
      //       options: {
      //         failOnError: true,
      //         failOnWarning: true
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            // https://github.com/babel/babel-loader#options
            cacheDirectory: true,
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },

  devServer: {
    publicPath: "/dist",
    contentBase: path.join(__dirname),
    port: 9000,
    compress: false,
    overlay: {
      warnings: true,
      errors: true
    },
    stats: {
      chunks: false
    }
  },

  devtool: 'source-map'
};

'use strict';

const path = require('path');

module.exports = {
  entry: './es6/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    pathinfo: true
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
              failOnWarning: true,
              outputReport: {
                filePath: 'checkstyle.xml',
                formatter: require('eslint/lib/formatters/checkstyle')
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  }
};

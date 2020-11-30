const path = require('path');
const { merge } = require('webpack-merge');
const devServerConfig = require('../../../webpack/webpack.server');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(devServerConfig, {
  entry: path.resolve(__dirname, '../src/render.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  // plugins: [
  // ],
  // devServer: {
  //   contentBase: path.resolve(__dirname, '../dist'),
  // },
});

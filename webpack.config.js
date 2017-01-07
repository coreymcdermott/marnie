const path    = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './bin',
    filename: 'index.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?name=[name].[ext]limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?name=[name].[ext]limit=10000&mimetype=application/octet-stream',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?name=[name].[ext]limit=10000&mimetype=application/octet-stream',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?name=[name].[ext]limit=10000&mimetype=image/svg+xml',
    }],
  },
  node: {
    fs: 'empty',
  },
  externals: [{
    './cptable': 'var cptable',
  }],
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })],
};

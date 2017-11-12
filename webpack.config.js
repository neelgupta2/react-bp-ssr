const path = require('path');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: ['babel-polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, include: /node_modules/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(jpe?g|png|gif|svg)$/i, use: ['url-loader?limit=10000', 'img-loader'] }
    ]
  }
};

module.exports = config;
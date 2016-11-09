// webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/public', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src/public', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.js?$/,
      //include:[path.resolve(__dirname,"src/public")],
      exclude: /node_modules/,
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.json/,
      loader: "json-loader"
    },
    {
      test: /\.css/,
      loader: "style-loader!css-loader"
    }]
  },
  node : {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'client'),

  devtool: 'eval-source-map',

  entry: {
    app: './app.jsx',
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015'],
          },
        },
      },
    ],
  },

};

module.exports = config;

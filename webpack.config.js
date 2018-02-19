const path = require('path');

const config = {
  context: path.resolve(__dirname, 'client'),

  devtool: 'eval-source-map',

  entry: './app.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js',
  },

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

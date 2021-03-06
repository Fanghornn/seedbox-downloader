const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('client/src/index.js'),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              'babel-plugin-styled-components',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      ui: path.resolve('client/src/ui/'),
      bootstrap: path.resolve('client/src/bootstrap/'),
      business: path.resolve('client/src/business/'),
      icons: path.resolve('client/src/icons'),
    },
  },
  output: {
    filename: 'build.js',
    path: path.resolve('client/public/build-prod'),
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${path.resolve('client/public')}/index.html`,
      template: `${path.resolve('client/public')}/index-template.html`,
    }),
  ],
};

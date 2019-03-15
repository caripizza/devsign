const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// eslint-disable-next-line
module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  devServer: {
    port: 7890,
    historyApiFallback: true
  },
  plugins: [
    new DotEnvPlugin({ systemvars: true }),
    new CopyWebpackPlugin([{
      from: 'public'
    }]),
    new HtmlPlugin({
      template: './src/index.html',
      favicon: './assets/favicon.ico'
    }),
    new CleanPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties', 'babel-plugin-styled-components'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
require('dotenv').config();

const config = {
  name: 'frontend',
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: {
    app: './frontend/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'build', 'public'),
    filename: 'main.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['frontend'],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'frontend'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'frontend', 'index.html'),
      filename: path.resolve(__dirname, 'build', 'public', 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'frontend', 'static'), to: 'static' },
      ],
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'API_KEY']),
    new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};

module.exports = config;

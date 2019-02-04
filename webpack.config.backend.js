const path = require('path');
const nodeExternals = require('webpack-node-externals');
require('dotenv-flow').config();

module.exports = {
  name: 'backend',
  target: 'node',
  mode: process.env.NODE_ENV,
  entry: [
    path.resolve(__dirname, 'backend', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/',
  },
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  resolve: {
    modules: [path.resolve(__dirname, 'backend'), 'node_modules'],
    extensions: ['.js', '.json'],
  },
};

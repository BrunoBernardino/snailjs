const frontend = require('./webpack.config.frontend.js');
const backend = require('./webpack.config.backend.js');

// NOTE: the backend has some of these overridden and set "manually" in backend/index.js
const common = {
  stats: 'minimal',
  watchOptions: {
    ignored: [
      'test/*',
      'node_modules/*',
      'frontend/*',
      'flow-typed/*',
      'build/public/*',
      'data/*',
      'package.json',
    ],
  },
};

module.exports = [
  {
    ...frontend,
    ...common,
  },
  {
    ...backend,
    ...common,
  },
];

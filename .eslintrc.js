module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:flowtype/recommended',
  ],
  rules: {
    semi: 2,
    'max-len': 'off',
    'flowtype-errors/show-errors': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'no-console': 'off',
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
    'import/resolver': {
      node: {
        paths: ['frontend', 'backend'],
      },
    },
  },
  plugins: [
    'flowtype',
    'flowtype-errors',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};

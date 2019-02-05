const eslint = {
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

// https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/123
if (process.env.CI === true) {
  eslint.rules['flowtype-errors/show-errors'] = 'off';
}

module.exports = eslint;

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
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'object-curly-newline': 'off',
    'arrow-parens': ['error', 'always'],
    'implicit-arrow-linebreak': 'off',
    'no-restricted-globals': 'off',
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
if (process.env.CI) {
  eslint.rules['flowtype-errors/show-errors'] = 'off';
}

module.exports = eslint;

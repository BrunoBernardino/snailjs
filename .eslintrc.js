const eslint = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    semi: 2,
    'max-len': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'object-curly-newline': 'off',
    'arrow-parens': ['error', 'always'],
    'implicit-arrow-linebreak': 'off',
    'no-restricted-globals': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['frontend', 'backend'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  plugins: [],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};

module.exports = eslint;

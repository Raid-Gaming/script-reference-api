module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': ['error', 120],
    'lines-between-class-members': 'off',
    curly: ['error', 'all'],
  },
};

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
    semi: [2, 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/prefer-stateless-fuction': 0,
  },
  globals: {
    expect: true,
    test: true,
    afterEach: true,
  },
}

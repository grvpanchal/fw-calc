module.exports = {
  'extends': 'airbnb-base',
  'rules': {
    'no-undef': 'off',
    'no-alert': 'off',
    'quote-props': 'off',
    'brace-style': 2,
    'object-shorthand': 'off',
    'no-console': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'default-param-last': 'off',
    'max-len': 'off',
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      '@jsenv/importmap-eslint-resolver': {
        projectDirectoryUrl: __dirname,
        importMapFileRelativeUrl: './importmap.json',
      },
    },
  },
};

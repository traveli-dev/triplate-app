module.exports = {
  extends: ['markuplint:recommended-react'],
  parser: {
    '.[jt]sx$': '@markuplint/jsx-parser'
  },
  specs: [
    '@markuplint/react-spec'
  ],
  parserOptions: {},
  extends: [],
  rules: {}
}

module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    // https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // useEffectの依存関係に出るワーニングを外す
    'react-hooks/exhaustive-deps': 'off',

    '@typescript-eslint/no-var-requires': 'off',
    // jsxのstring属性はダブルクウォートにする
    'react/jsx-curly-brace-presence': [
      'error', {
        props: 'never', children: 'never'
      }
    ],
    // デバッグ用のconsole.logが残らないようにする
    'no-console': [
      'error', {
        // console.warn と console.errorは対象から外す（try-catchなどで使うことがあるため）
        allow: ['warn', 'error']
      }
    ],
    // 使ってない変数定義が残らないようにする
    '@typescript-eslint/no-unused-vars': [
      // _から始まる変数は対象から外す（関数の引数として使うため）
      'error', {
        argsIgnorePattern: '^_', varsIgnorePattern: '^_'
      }
    ]
  }
}
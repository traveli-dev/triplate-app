module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    // https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // useEffectの依存関係に出るワーニングを外す
    'react-hooks/exhaustive-deps': 'off',
    // next.config.jsでrequire使うのでoff
    '@typescript-eslint/no-var-requires': 'off',
    // jsxの属性で変数じゃないものはダブルクウォートにする
    // <Components string="string" />
    'react/jsx-curly-brace-presence': [
      'warn', {
        props: 'never', children: 'never'
      }
    ],
    // デバッグ用のconsole.logがプロダクトに残らないようにする（console.logを使うと赤波線が出るので，使い終わったらちゃんと消す）
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
    ],
    // 相対パスでimportしてたらエラー
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          './', '../'
        ]
      }
    ],
    // importの順番 pages/_app.tsxに揃っている
    'import/order': [
      'warn',
      {
        // groupごとに以下の順で並べる
        groups: [
          // node.jsのbuiltinモジュール（fs, pathなど）
          'builtin',
          // installしたパッケージ（package.jsonに記載されている）
          'external',
          // type imports
          'type',
        ],
        // グループごとの改行は入れない
        'newlines-between': 'never',
        // グループ内はアルファベット順に並べる
        'alphabetize': {
          order: 'asc',
          // 大文字と小文字を区別する
          caseInsensitive: false
        },
        // customグループを定義
        pathGroups: [
          // react,next関連はexternalより前に
          // import React from 'react'など
          {
            pattern: 'react**',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'next-**',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'firebase/**',
            group: 'external',
            position: 'before'
          },
          // @/componentsなどはtypeの前に
          {
            pattern: '@/**',
            group: 'type',
            position: 'before'
          },
          {
            pattern: '{.,..}',
            unnamed: true, // this is a new option
            group: 'unknown',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['react**', 'next/**', 'next-**', 'firebase/'],
      }
    ],
    // importをファイル先頭に記述
    'import/first': 'warn',
    // 最後のimportの後に空行を追加
    'import/newline-after-import': 'warn',
  },
    overrides: [
    {
      // mdx2に移行の際利用する
      files: ['*.stories.ts'],
      rules: {
        'storybook/story-exports': 'off'
      }
    }
  ]
}
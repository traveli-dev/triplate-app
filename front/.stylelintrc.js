module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-a11y/recommended'
  ],
  // emotionでstylelintを使うための設定
  overrides: [
    {
      "files": ["src/**/*.{ts,tsx}"],
      "customSyntax": "@stylelint/postcss-css-in-js",
    }
  ],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    // 擬似要素のcontentプロパティに文字列を指定してもスクリーンリーダーで読み上げられないので警告
    'a11y/content-property-no-static-value': true,
    // 廃止された属性を警告
    'a11y/no-obsolete-attribute': true,
    // 廃止されたセレクターを警告
    'a11y/no-obsolete-element': true,
    // font-sizeはremで指定する（global.tsは%なので%もあり）
    'declaration-property-unit-allowed-list': {
      '/^font-size/': ['rem', '%'],
    },
    // コメントの内側にスペースを必須にする
    'comment-whitespace-inside': 'always',
    // 2重スラッシュによるコメントを禁止
    'no-invalid-double-slash-comments': true,
    'value-no-vendor-prefix': true
  }
}

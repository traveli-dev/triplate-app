module.exports = {
  parser: {
    ".[jt]sx?$": "@markuplint/jsx-parser"
  },
  parserOptions: {},
  specs: [
    "@markuplint/react-spec"
  ],
  extends: [],
  excludeFiles: [
    ".next/**/*.html"
  ],
  rules: {
    // 重複を警告
    "attr-duplication": true,
    "id-duplication": true,
    // 廃止・非推奨属性を警告
    "deprecated-attr": true,
    "deprecated-element": true,
    // 必須属性が要素に表示されていない場合に警告
    "required-attr": true,
    // TODO:正規表現でclass名の命名規則を警告できる。プロジェクトないでルールがあれば追加したい
    "class-naming": false,
    // インデントが統一されていないと警告 ※prettierに任せるため無効
    "indentation": false
  }
}

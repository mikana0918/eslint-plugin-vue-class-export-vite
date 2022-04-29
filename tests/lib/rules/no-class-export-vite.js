"use strict";

// const babelEslint =  require.resolve('babel-eslint')
const babelEslint = require("babel-eslint")

// テスターを読み込む
var RuleTester = require("eslint").RuleTester;

const eslintConfig  = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
}
// テスターを作って実行する
// tester.run(ルール名, ルール定義, テストパターン);
var tester = new RuleTester();
tester.run("no-literal-call", require("../../../lib/rules/no-class-export-vite"), {
  valid: [
      { code: "", parser: babelEslint, },
      { code: "class Hoge {}", env: {es6: true} , parser:  babelEslint, },
      { code : "class Hoge extends Vue {}", env: {es6: true} , parser:  babelEslint, }
    ],
  invalid: [
    {
      code: "export default class Hoge extends Vue {}",
      errors: ["export default is not working on vite."],
      env: { es6: true },
      parser: babelEslint,
      parserOptions: eslintConfig.parserOptions
    },
    {
      code: "export default class Hoge {}",
      errors: ["export default is not working on vite."],
      env: { es6: true },
      parser: babelEslint,
      parserOptions: eslintConfig.parserOptions
    },
  ]
});
"use strict";

// ルール定義。
// https://github.com/import-js/eslint-plugin-import/blob/main/src/rules/prefer-default-export.js
module.exports = {
  meta: { type: "invalid", schema: [] },
  create: function (context) {
    let specifierExportCount = 0;
    let hasDefaultExport = false;
    let namedExportNode = null;

    const NOT_WORKING_ON_VITE = "export default is not working on vite."

    console.log("create")
  
    return {
      ExportDefaultSpecifier: function (node) {
        console.log("has export default")
        hasDefaultExport = true;

        context.report({node: node, message: NOT_WORKING_ON_VITE });
      },
      ExportSpecifier: function (node) {
        if ((node.exported.name || node.exported.value) === 'default') {
          hasDefaultExport = true;
        } else {
          specifierExportCount++;
          namedExportNode = node;
        }
      },
      ExportDefaultDeclaration: function (node) {
        hasDefaultExport = true;
        context.report({ node: node, message: NOT_WORKING_ON_VITE });
      },
      // 'Program:exit': function () {
      //   if (specifierExportCount === 1 && hasDefaultExport) {
      //     context.report(namedExportNode, 'export default does not work on vite');
      //   }
      // },
    }
  }
}

// ルールのオプション定義。今回は使わない。
module.exports.schema = [];
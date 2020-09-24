const { copySync } = require('fs-extra');
const { resolve } = require('path');

const distDir = resolve('./dist');

function copyFiles() {
  const srcDir = resolve('./src');

  copySync(srcDir, distDir, {
    overwrite: true,
    resolve: true,
  });
}
module.exports = copyFiles;

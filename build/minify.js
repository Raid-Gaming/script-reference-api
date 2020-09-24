const { readdirSync, readFileSync, statSync, writeFileSync } = require('fs');
const { resolve } = require('path');

function minifyFile(path) {
  const contents = readFileSync(path);
  // JSON.stringify will default to minified JSON
  const minifiedContents = JSON.stringify(JSON.parse(contents));
  writeFileSync(path, minifiedContents);
}

function minifyRecursively(path) {
  const files = readdirSync(path);
  files.forEach((file) => {
    const filePath = resolve(path, file);
    if (statSync(filePath).isDirectory()) {
      minifyRecursively(filePath);
    } else {
      minifyFile(filePath);
    }
  });
}

function minify() {
  minifyRecursively(resolve('./dist'));
}
module.exports = minify;

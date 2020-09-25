const { readdirSync, readFileSync, statSync, writeFileSync } = require('fs');
const { resolve, sep } = require('path');

function isJSONFile(path) {
  return path.slice(-5) === '.json';
}

function getMethods(path) {
  const files = readdirSync(path).filter((file) => {
    const dir = resolve(path, file);
    return statSync(dir).isFile() && isJSONFile(file);
  });

  return files.map((file) => {
    const dir = resolve(path, file);
    const content = JSON.parse(readFileSync(dir));
    const { engine } = content;

    const name = file.slice(0, -5);
    writeFileSync(dir, JSON.stringify({ name, ...content }));

    return {
      name: file.slice(0, -5),
      engine,
    };
  });
}

function getSubDirectories(path) {
  return readdirSync(path)
    .map((directory) => resolve(path, directory))
    .filter((directory) => statSync(directory).isDirectory());
}

function getDirectoryName(path) {
  return path.split(sep).pop();
}

function getCategoryIndexPath(path) {
  return resolve(path, 'index.json');
}

function getCategoryMeta(path) {
  const indexPath = getCategoryIndexPath(path);
  return JSON.parse(readFileSync(indexPath));
}

function buildNamespaceIndex(path) {
  const name = getDirectoryName(path);
  const methods = getMethods(path);
  return { name, methods };
}

function buildCategoryIndex(path) {
  const directories = getSubDirectories(path);
  const namespaces = directories.map((directory) => buildNamespaceIndex(directory));

  const category = {
    ...getCategoryMeta(path),
    namespaces,
  };

  const indexPath = getCategoryIndexPath(path);
  writeFileSync(indexPath, JSON.stringify(category));

  return category;
}

function indexFiles() {
  const path = resolve('./dist');
  const directories = getSubDirectories(path);
  const categories = directories.map((directory) => buildCategoryIndex(directory));

  const indexPath = resolve(path, 'index.json');
  writeFileSync(indexPath, JSON.stringify(categories));
}
module.exports = indexFiles;

const copyFiles = require('./build/copyFiles');
const indexFiles = require('./build/indexFiles');
const minify = require('./build/minify');

console.log('Step 1: Copying files...');
copyFiles();

console.log('Step 2: Building indexes...');
indexFiles();

console.log('Step 3: Minifying outputs...');
minify();

console.log('Done!');

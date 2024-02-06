#! /home/umerkang/.nvm/versions/node/v20.10.0/bin/node
const fs = require('fs');
const path = require('path');

const folderName = process.argv[2];

if (!folderName) {
  throw new Error('Folder name is not provided');
}

fs.mkdirSync(path.join(process.cwd(), folderName));
fs.mkdirSync(path.join(process.cwd(), folderName, '__test__'));
fs.writeFileSync(path.join(process.cwd(), folderName, 'index.ts'), '');

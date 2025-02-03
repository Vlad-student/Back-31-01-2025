const path = require('path');
// console.log(path);

const myFileName = __filename;
const dirName = __dirname;
console.log(myFileName);
// console.log(dirName);

// console.log('filename with extantion', path.basename(myFileName));
// console.log('fullpath for dirname',path.dirname(myFileName));
// console.log('filename without extantion',path.extname(myFileName));

const pathToText = path.resolve(__dirname, 'text.txt');
console.log(pathToText);






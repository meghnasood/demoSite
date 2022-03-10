"/Users/meghnasood/Desktop/FJP6/module2/node/path.js"

let path = require('path');

getExt = path.extname("/Users/meghnasood/Desktop/FJP6/module1/project/html.png");

getBasename = path.basename("/Users/meghnasood/Desktop/FJP6/module1/project/html.png");

// console.log(getExt);
// console.log(getBasename);

// console.log(__dirname);
// console.log(__filename);

let dirPath = __dirname;
let newFilePath = path.join(dirPath, "join.js");
console.log(newFilePath);
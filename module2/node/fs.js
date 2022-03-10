let fs = require("fs");

let path = require("path");

//let newFile = path.join("/Users/meghnasood/Desktop/FJP6/module1/project", "text.txt");
let newFile = path.join(__dirname, "text.txt");
fs.writeFileSync(newFile, "Hello I am a text file");
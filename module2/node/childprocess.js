let cp = require('child_process');

//cp.execSync("open -a Calculator");

//cp.execSync("code");

let test = cp.execSync("node abc.js");

console.log("hello from main " + test);
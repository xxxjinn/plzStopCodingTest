//최댓값 - 브3
//1분

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let max = Math.max(...input);
console.log(max);
console.log(input.indexOf(max) + 1);

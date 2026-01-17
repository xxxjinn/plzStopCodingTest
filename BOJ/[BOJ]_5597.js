//과제 안 내신분..? - 브3
//12분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let arr = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) arr.push(i);
}

console.log(arr.join("\n"));

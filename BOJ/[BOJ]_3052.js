//나머지 - 브2
//4분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let arr = [];
for (let i = 0; i < input.length; i++) {
  arr[i] = input[i] % 42;
}

console.log(new Set(arr).size);

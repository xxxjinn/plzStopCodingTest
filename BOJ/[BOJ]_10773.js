//제로 - 실버4
//10분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [k, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = [];

for (let i = 0; i < k; i++) {
  let number = input[i];
  if (number !== 0) {
    sum.push(number);
    continue;
  }
  sum.pop();
}

console.log(sum.reduce((pre, cur) => pre + cur, 0));

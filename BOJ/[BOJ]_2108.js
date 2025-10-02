//통계학
//실버2
//20분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input = input.sort((a, b) => a - b);

function avg(input) {
  let res = Math.round(input.reduce((pre, cur) => pre + cur, 0) / n);
  return res === -0 ? 0 : res;
}

function median(input) {
  return input[parseInt(input.length / 2)];
}

function mode(input) {
  let obj = {};

  for (let i = 0; i < n; i++) {
    obj[input[i]] = (obj[input[i]] || 0) + 1;
  }

  let count = Math.max(...Object.values(obj));

  let numbers = Object.keys(obj)
    .filter((v) => obj[v] === count)
    .sort((a, b) => a - b);

  return numbers.length > 1 ? numbers[1] : numbers[0];
}

function range(input) {
  return Math.abs(input[input.length - 1] - input[0]);
}

console.log(avg(input));
console.log(median(input));
console.log(mode(input));
console.log(range(input));

//평균
//브론즈5
//10분 미만 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

input = input.join(" ").split(" ").map(Number);
const max = Math.max(...input);

for (let i = 0; i < n; i++) {
  input[i] = (input[i] / max) * 100;
}

console.log(input.reduce((pre, cur) => pre + cur, 0) / n);

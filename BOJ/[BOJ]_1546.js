//평균 - 브론즈5
//5분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let number = input[0].split(" ");
let max = Math.max(...number);

console.log(number.map((v) => (v / max) * 100).reduce((a, b) => a + b, 0) / n);

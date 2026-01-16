// 최소, 최대 - 브론즈3
// 10분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let arr = input.join(" ").split(" ");
console.log(Math.min(...arr) + " " + Math.max(...arr));

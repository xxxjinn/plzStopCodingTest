// 상수 - 브론즈2
// 2분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b] = fs.readFileSync(path).toString().trim().split(" ");

a = a.split("").reverse().join("");
b = b.split("").reverse().join("");

console.log(Math.max(a, b));

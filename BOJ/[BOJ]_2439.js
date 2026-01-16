// 별 찍기-2 -브론즈4
// 1분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let n = fs.readFileSync(path).toString().trim();

for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}

// 숫자 빈도수 - 실버5
// 5분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, d] = fs.readFileSync(path).toString().trim().split(" ");

let answer = 0;
for (let i = 1; i <= n; i++) {
  const num = i.toString().split("");
  answer += num.filter((v) => v === d).length;
}

console.log(answer);

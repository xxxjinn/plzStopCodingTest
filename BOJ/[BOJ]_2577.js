//숫자의 개수 - 브2
//4분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b, c] = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let res = (a * b * c).toString();
let arr = [];

for (let i = 0; i <= 9; i++) {
  arr[i] = res
    .split("")
    .map(Number)
    .filter((v) => v === i).length;
}

console.log(arr.join("\n"));

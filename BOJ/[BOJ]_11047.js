// 동전 0 - 실4
// 12분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [arr, ...v] = fs.readFileSync(path).toString().trim().split("\n");

let [n, k] = arr.split(" ");

v = v.reverse().map(Number);

let answer = 0;
for (let i = 0; i < n; i++) {
  let cur = v[i];

  if (k === 0) break;
  if (k - cur < 0) continue;

  answer += Math.floor(k / cur);
  k = k % cur;
}

console.log(answer);

//약수 구하기 - 브3
//5분 미만 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, k] = fs.readFileSync(path).toString().trim().split(" ").map(Number);

let arr = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) arr.push(i);
}

console.log(arr.length < k ? 0 : arr[k - 1]);

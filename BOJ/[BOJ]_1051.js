//숫자 정사각형 - 실버3
//80분 소요
//혼자 못풂 (로직은 생각해냈는데 불필요한 부분이 많았음)
//잘한것은....... 어쨌든 포기 안하고 끝까지 혼자 풀어보고 근접한거?..

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [size, ...input] = fs.readFileSync(path).toString().trim().split("\n");

input = input.map((v) => v.split(""));
let [n, m] = size.split(" ").map(Number);

let maxSize = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let length = 1;
    let current = input[i][j];

    while (j + length < m && i + length < n) {
      if (
        input[i][j + length] === current &&
        input[i + length][j] === current &&
        input[i + length][j + length] === current
      ) {
        maxSize = Math.max(maxSize, length + 1);
      }
      length++;
    }
  }
}

console.log(maxSize ** 2);

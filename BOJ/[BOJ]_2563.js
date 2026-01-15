// 색종이 - 실버5
// 못품

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const n = Number(input[0]);
const papers = input.slice(1).map((v) => v.split(" ").map(Number));

//100*100
const board = Array.from({ length: 100 }, () => Array(100).fill(false));

//색종이 붙이기
for (const [x, y] of papers) {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      board[i][j] = true;
    }
  }
}

//넓이 계산
let answer = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (board[i][j]) answer++;
  }
}

console.log(answer);

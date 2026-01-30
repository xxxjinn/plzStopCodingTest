// 단지번호붙이기 - 실1
// 연습용

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const n = Number(input[0]);
const gridInput = input.slice(1);

//1: 집이 있음
//0: 집이 없음

//집이 연결되었다 = 좌-우/아래-위로 집이 있는 경우
//연결된 집의 모임 = 단지

let all = 0;
let count = [];
let houseCount = 0;

let arr = Array.from({ length: n }, () => Array(n).fill(false));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function dfs(y, x) {
  if (arr[y][x] || gridInput[y][x] === "0") return;

  arr[y][x] = true;

  houseCount++;

  for (let i = 0; i < 4; i++) {
    let nextX = dx[i];
    let nextY = dy[i];

    if (y + nextY >= 0 && y + nextY < n && x + nextX >= 0 && x + nextX < n) {
      dfs(y + nextY, x + nextX);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    houseCount = 0;
    if (gridInput[i][j] === "1" && !arr[i][j]) {
      dfs(i, j); //dfs -> 1일 때 단지 시작!
      count.push(houseCount);
      all++;
    }
  }
}
//단지 수, 각 단지에 속하는 집의 수 오름차순으로 출력

console.log(all);
console.log(count.sort((a, b) => a - b).join("\n"));

//dfs 함수의 역할을 for문과 잘 분리하기
//근데 좀 재밌당

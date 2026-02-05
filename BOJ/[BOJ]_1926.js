// 그림 - 실1
// 24분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let [n, m] = input.shift().split(" ").map(Number);

let count = 0;
let max = 0;

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map(Number);
}

let visited = Array.from({ length: n }, () => Array(m).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let area = 0;

function dfs(y, x) {
  visited[y][x] = true;
  area++;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < m &&
      ny >= 0 &&
      ny < n &&
      !visited[ny][nx] &&
      input[ny][nx] === 1
    ) {
      dfs(ny, nx);
    }
  }
}

for (let y = 0; y < n; y++) {
  for (let x = 0; x < m; x++) {
    if (!visited[y][x] && input[y][x] === 1) {
      dfs(y, x);
      count++;
      max = Math.max(max, area);
      area = 0;
    }
  }
}

console.log(count);
console.log(max);

//ㅠㅠ드디어 dfs 풀었다,, 그것도 짧은 시간에!

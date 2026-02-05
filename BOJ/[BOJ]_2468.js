// 안정 영역 - 실버1
// 1시간 소요 - 못품

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

n = +n;
for (let i = 0; i < n; i++) {
  input[i] = input[i].split(" ").map(Number);
}

let answer = 0;

let max = 0;
for (let i = 0; i < n; i++) {
  let current = input[i];
  max = Math.max(max, ...current);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(y, x, visited, height) {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < n &&
      !visited[ny][nx] &&
      input[ny][nx] > height
    ) {
      dfs(ny, nx, visited, height);
    }
  }
}

for (let height = 0; height <= max; height++) {
  let count = 0;
  let visited = Array.from({ length: n }, () => Array(n).fill(false));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!visited[y][x] && input[y][x] > height) {
        dfs(y, x, visited, height);
        count++;
      }
    }
  }
  answer = Math.max(answer, count);
}

console.log(answer);

//y랑 x랑 좌표를 for문 돌리면서 헷갈리기 시작하면서 꼬임
//dfs 돌리는 for문의 변수를 y,x로 해두고 시작하면 좀 나을듯?
//dfs 진입 시 조건을 동일하게 작성하기 (바깥과 dfs 내부 둘 다)

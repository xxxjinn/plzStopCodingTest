//유기농 배추 - 실버2
//연습용

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let answer = [];

function dfs(y, x, map, visited, n, m) {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];
    if (
      ny >= 0 &&
      ny < n &&
      nx >= 0 &&
      nx < m &&
      !visited[ny][nx] &&
      map[ny][nx] === "1"
    ) {
      dfs(ny, nx, map, visited, n, m);
    }
  }
}

for (let t = 0; t < T; t++) {
  const [m, n, k] = input[idx++].split(" ").map(Number);

  let map = Array.from({ length: n }, () => Array(m).fill("0"));

  for (let i = 0; i < k; i++) {
    let [x, y] = input[idx++].split(" ").map(Number);
    map[y][x] = "1";
  }

  let count = 0;

  let visited = Array.from({ length: n }, () => Array(m).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && map[i][j] === "1") {
        dfs(i, j, map, visited, n, m);
        count++;
      }
    }
  }
  answer.push(count);
}

console.log(answer.join("\n"));

//대충 dfs는 감 잡은 듯? 싶기도 하고.. 이 문제는 input이 너무 복잡해서 꼬였음
//어쨌든 dfs는 visited (true/false)로 방문 했는지 여부를 확인
//만약에 방문했으면 탐색하지 않음. 그게 개이득이고 효율적이니깐? 그리고 내 생각에 이게 dfs의 핵심인듯
//잊지 말기.... dfs가 뭔지 개념부터 생각해보면 그렇게 미친듯 어렵지는 않음!

//map 상으로 x,y 좌표 헷갈리지 않도록 계속 연습하는 게 중요할 것 같음 (여기에서 시간 많이 잡아먹음)

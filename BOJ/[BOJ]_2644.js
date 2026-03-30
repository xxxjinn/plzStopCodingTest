// 촌수계산 - 실2
//1시간 소요 - 못풂
//dfs

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, numbers, m, ...relation] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

let graph = [];

for (let i = 0; i <= n; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  let [x, y] = relation[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let [p1, p2] = numbers.split(" ").map(Number);

let visited = [];
for (let i = 0; i <= n; i++) {
  visited[i] = false;
}

let answer = -1;

const dfs = (node, depth) => {
  visited[node] = true;

  if (node === p2) {
    answer = depth;
    return;
  }

  for (let next of graph[node]) {
    if (!visited[next]) {
      dfs(next, depth + 1);
    }
  }
};

dfs(p1, 0);

console.log(answer);

// 그래프 오랜만에하니까 양방향으로 하는거 까먹어서.... 접근 방법부터가 틀림
// 그래도 dfs 개념 자체는 어느정도 익힌듯? (계속해서 자식으로 자식으로 가보고 visited됐으면 안가는 구조)

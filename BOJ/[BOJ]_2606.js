//바이러스 - 실버3
//못풂
//그래프 연결은 생각했는데 정작 중요한 dfs 아이디어를 생각해내지 못함

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [comNum, pairNum, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

comNum = Number(comNum);
pairNum = Number(pairNum);

let count = 0;
let graph = [];

for (let i = 0; i <= comNum; i++) {
  graph.push([]);
}

for (let i = 0; i < pairNum; i++) {
  let [n, m] = input[i].split(" ").map(Number);

  graph[n].push(m);
  graph[m].push(n);
}

let visited = Array(comNum + 1).fill(false);

function dfs(start) {
  visited[start] = true;

  for (let next of graph[start]) {
    if (!visited[next]) {
      count++;
      dfs(next);
    }
  }
}
dfs(1);

console.log(count);

// 등수 구하기 - 실4
// 40분 소요해서 못풂.. 실화냐 실버4인데

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [first, scores] = fs.readFileSync(path).toString().trim().split("\n");

// n: 랭킹 리스트에 올라가있는 점수 수
// newScore: 태수의 새로운 점수
// p: 랭킹 리스트에 올라갈 수 있는 점수의 개수
let [N, newScore, P] = first.split(" ").map(Number);

if (N === 0) {
  console.log(1);
  return;
}

scores = scores.split(" ").map(Number);

if (N === P && scores[N - 1] >= newScore) {
  console.log(-1);
  return;
}

let rank = 1;

for (let i = 0; i < N; i++) {
  if (scores[i] > newScore) {
    rank++;
  } else {
    break;
  }
}

console.log(rank);

// 집중이 안되는 장소에서 하면 문제를 하나도 못읽음...
// 코테 매일매일 풀어야 감이 안떨어질듯

//덩치 - 실5
//20분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

//(몸무게, 키) -> 덩치
//A의 몸무게 > B의 몸무게 && A의 키 > B의 키 -> A의 덩치가 B의 덩치보다 더 큼

//만약에 몸무게는 A가 더 무거운데 B가 키가 더 클때 누구도 상대방보다 더 덩치가 크다고 할 수 없음

//덩치 등수= 자신보다 더 큰 덩치의 사람의 수
//만약에 자기보다 더 큰 덩치의 사람이 k명이면 그사람의 덩치 등수는 k+1등

let N = input[0];

let answer = [];

for (let i = 1; i <= N; i++) {
  let [w, h] = input[i].split(" ").map(Number);
  let more = 0;

  for (let j = 1; j <= N; j++) {
    if (i === j) continue;

    let [nextW, nextH] = input[j].split(" ").map(Number);

    if (w < nextW && h < nextH) {
      more++;
    }
  }

  answer.push(more + 1);
}

console.log(answer.join(" "));

//문제에 써있는 문장 그대로를 코드로 옮기니까 해결!
//코드를 먼저 쓰기보다는 문제를 한 번 정리해보고 나서 풀기

// 2차원 배열의 합 - 실버5
// 1시간 소요
// 문제 이해가 잘 안되어서 질문게시판 보고 문제 이해함ㅜㅜ

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const k = input[n + 1];

let position = [];
for (let i = n + 2; i < input.length; i++) {
  position.push(input[i].split(" ").map(Number));
}

let answer = [];

for (let idx = 0; idx < k; idx++) {
  let [i, j, x, y] = position[idx];
  let sum = 0;

  if (i === x && j === y) {
    answer.push(arr[i - 1][j - 1]);
    continue;
  }

  /*
    //내가 생각했던 방식: 직사각형 모양으로
    //(1,3)과 (2,3)이라면
    //(1,3), (2,1), (2,2), (2,3)의 값을 모두 더함
  while (i <= x) {
    sum += arr[i - 1][j - 1];
    if (j === m) {
      i++;
      j = 1;
      continue;
    } else {
      j++;
    }
  }*/

  /*근데 내가 생각했던 방식이 아니라
  (i,j), (x,y)를 왼쪽/오른쪽 대각선 꼭짓점으로 하는 범위 값 다 더한걸 구하기였음
   */

  for (let a = i; a <= x; a++) {
    for (let b = j; b <= y; b++) {
      sum += arr[a - 1][b - 1];
    }
  }

  answer.push(sum);
}

console.log(answer.join("\n"));

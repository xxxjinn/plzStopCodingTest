//체스판 다시 칠하기 - 실버3
//80분 소요
//못풂 -> 너무 복잡하게 생각

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [mn, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let [m, n] = mn.split(" ").map(Number);

//nxm에서 8x8 골라서 체스판 만들기
//다시 칠해야 하는 정사각형 개수의 최솟값을 구해야 함
//nxm에서 최대한 WB가 번갈아서 나오는 경우의 8x8을 찾기

let min = Infinity;

function countRepaint(y, x) {
  let repaintW = 0; //첫 칸이 W인 경우로 가정했을 때 다시 칠해야하는 칸 수
  let repaintB = 0; //첫 칸이 B인 경우로 가정했을 때 다시 칠해야하는 칸 수

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let current = input[y + i][x + j];

      if ((i + j) % 2 === 0) {
        //첫 칸의 색과 같아야 함

        //조건 각각을 따로따로 생각하기 (첫 칸이 W인 경우, 첫 칸이 B인 경우)
        if (current !== "W") repaintW++;
        if (current !== "B") repaintB++;
      } else {
        //첫 칸의 색과 달라야 함

        if (current !== "B") repaintW++;
        if (current !== "W") repaintB++;
      }
    }
  }
  return Math.min(repaintW, repaintB);
}

for (let y = 0; y <= m - 8; y++) {
  for (let x = 0; x <= n - 8; x++) {
    min = Math.min(min, countRepaint(y, x));
  }
}

console.log(min);

//y랑 x를 이미 알고 있고, 8x8이라는 것도 알고있는데
// 왜 첫 칸의 실제 색을 토대로 계산하지 않고 countRepaint 안에서
// 첫 칸이 W인 경우와 B인 경우를 동시에 계산하는지 궁금했었는데

// 첫 칸의 색을 바꿨을 때 나머지를 다시 색칠하는 경우가 더 적을 수 있어서!

/** 배열을 인덱스로 생각해서 규칙 찾아내기 */
/** for문 활용하기 */

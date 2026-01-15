// 1,2,3 더하기 - 실버3
// DP 연습용

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// n이 주어졌을 때 n을 1,2,3의 합으로 나타내는 방법의 수

let dp = Array(11).fill(0); // 저장하는 값 = 해당 index를 만들 수 있는 방법의 개수

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 12; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let i = 0; i < n; i++) {
  console.log(dp[input[i]]);
}

// ex) dp[4] -> 1,2,3을 조합해서 4를 만들 수 있는 방법 개수
// (3을 만들 수 있는 방법들)+1 = 4가 됨
// ex) 1+1+1(+1) =4, 1+2(+1) =4 이런식으로

// (2를 만들 수 있는 방법들)+2 = 4가 됨
// (1을 만들 수 있는 방법들)+3 = 4가 됨

// => dp[3]+dp[2]+dp[1] ==> 4를 만들 수 있는 방법의 개수

// dp: 작은 문제를 해결하는 방법을 모아서 큰 문제를 해결하는 방식
// 일단 일반화를 한 후에 점화식을 구하면 됨

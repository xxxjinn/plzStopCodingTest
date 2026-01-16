// 파도반 수열 - 실버3
// 20분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [t, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let dp = Array(101).fill(0);

dp[0] = 0;
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;
dp[6] = 3;
dp[7] = 4;
dp[8] = 5;
dp[9] = 7;
dp[10] = 9;
dp[11] = 12; //9+3 dp[10]+dp[6]

for (let i = 12; i <= 100; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

for (let i = 0; i < t; i++) {
  console.log(dp[input[i]]);
}

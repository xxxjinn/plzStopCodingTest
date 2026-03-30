//성적 통계 - 실5
//10분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [k, ...input] = fs.readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < k; i++) {
  let [n, ...nums] = input[i].split(" ").map(Number);

  console.log("Class", i + 1);

  nums.sort((a, b) => b - a);

  let lg = 0;
  for (let j = 0; j < n - 1; j++) {
    lg = Math.max(lg, nums[j] - nums[j + 1]);
  }

  console.log(
    `Max ${Math.max(...nums)}, Min ${Math.min(...nums)}, Largest gap ${lg}`,
  );
}

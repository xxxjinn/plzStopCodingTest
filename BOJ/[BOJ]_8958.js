// OX퀴즈 - 브2
// 15분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [t, ...input] = fs.readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < t; i++) {
  let arr = input[i];

  let answer = 0;
  let count = 1;
  for (let j = 0; j < arr.length; j++) {
    let cur = arr[j];

    answer += count;
    if (cur === "X") {
      answer -= count;
      count = 1;
      continue;
    }
    count++;
  }
  console.log(answer);
}

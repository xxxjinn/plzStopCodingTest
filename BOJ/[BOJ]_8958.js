//OX퀴즈 - 브2
//10분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < n; i++) {
  let number = 0;
  let answer = 0;

  const currentStr = input[i];

  for (let j = 0; j < currentStr.length; j++) {
    const cur = currentStr[j];

    if (cur === "O") number++;
    else number = 0;
    answer += number;
  }
  console.log(answer);
}

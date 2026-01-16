// 문자열 반복 - 브론즈2
// 4분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [t, ...input] = fs.readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < t; i++) {
  let [r, s] = input[i].split(" ");

  let answer = "";
  for (let j = 0; j < s.length; j++) {
    answer += s[j].repeat(r);
  }
  console.log(answer);
}

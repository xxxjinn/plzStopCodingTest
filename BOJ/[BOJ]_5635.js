// 생일 - 실버5
// 50분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

input = input
  .map((v) => v.split(" "))
  .sort((a, b) => {
    //sort에서 return 명시해주는 것 잊지 말기..
    if (Number(b[3]) < Number(a[3])) {
      return Number(b[3]) - Number(a[3]);
    } else if (Number(b[3]) === Number(a[3])) {
      if (Number(b[2]) < Number(a[2])) {
        return Number(b[2]) - Number(a[2]);
      }
      return Number(b[1]) - Number(a[1]);
    }
  });

console.log(input[0][0]);
console.log(input[n - 1][0]);

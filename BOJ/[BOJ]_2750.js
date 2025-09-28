//수 정렬하기 - 브2
//5분 미만

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [_, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input.sort((a, b) => a - b).join("\n"));

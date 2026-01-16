// 단어의 개수 - 브론즈2
// 10분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let answer = fs.readFileSync(path).toString().trim().split(" ");

console.log(answer[0] === "" ? 0 : answer.length);

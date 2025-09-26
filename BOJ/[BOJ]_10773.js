//제로 - 실버4
//10분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [_, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = [];
for (let i = 0; i < input.length; i++) {
  let currentNumber = input[i];

  if (currentNumber !== 0) {
    arr.push(currentNumber);
  } else {
    arr.pop();
  }
}

console.log(arr.reduce((pre, cur) => pre + cur, 0));

//문제 난이도가 잘못 배정된 것 같다,,
//실버3을 못풀어내서 실버4를 골랐는데 너무 쉬워서 실버3을 계속 풀어야겠음!

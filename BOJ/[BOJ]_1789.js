//수들의 합
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = +fs.readFileSync(path).toString().trim();

let count = 1;
let answer = 0;

while (input > 0) {
  input -= count;
  count++;
  answer++;
}

console.log(input === 0 ? answer : answer - 1);

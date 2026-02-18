//이전 순열 - 실3
//못품

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

input = input[0].split(" ").map(Number);

let i = n - 1;

while (i > 0 && input[i - 1] <= input[i]) i--;

if (i === 0) {
  console.log(-1);
  return;
}

let j = n - 1;
while (input[j] >= input[i - 1]) j--;

[input[i - 1], input[j]] = [input[j], input[i - 1]];

const tail = input.slice(i).sort((a, b) => b - a);
const result = input.slice(0, i).concat(tail);

console.log(result.join(" "));

//풀이를 보고도 이해하는데 한참걸렸다.............. 논리적인 능력이 부족한듯

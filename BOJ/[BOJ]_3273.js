// 두 수의 합
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let n = parseInt(input[0]);
let arr = input[1].split(" ").map((v) => Number(v));
let x = parseInt(input[2]);

let answer = 0;

/** 시간복잡도 문제로 인한 시간초과
for (let i = 0; i < n; i++) {
  let cur = input[i];
  for (let j = i + 1; j < n; j++) {
    let next = input[j];
    if (x - cur === next) {
      answer++;
      break;
    }
  }
}
*/

let set = new Set();

for (let i = 0; i < arr.length; i++) {
  let cal = x - arr[i];
  if (set.has(cal)) answer++;
  set.add(arr);
}

console.log(answer);

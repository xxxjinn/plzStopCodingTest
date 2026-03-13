//일곱 난쟁이 - 브1
//20분 소요
//브루트포스

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let sum = input.reduce((a, b) => a + b, 0);

let answer = [];

for (let i = 0; i < 8; i++) {
  let first = input[i];
  for (let j = i + 1; j < 9; j++) {
    let second = input[j];

    if (sum - (first + second) === 100) {
      //먼저 두 명을 제외하고 풀기
      for (let k = 0; k < 9; k++) {
        if (k !== i && k !== j) {
          answer.push(input[k]);
        }
      }
      console.log(answer.sort((a, b) => a - b).join("\n"));
      process.exit(0);
    }
  }
}

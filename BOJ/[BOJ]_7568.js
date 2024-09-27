//덩치
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let answer = [];

let n = input.shift();
input = input.map((v) => v.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (i !== j) {
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) count++;
    }
  }
  answer.push(count + 1);
}

console.log(answer.join(" "));

//평균은 넘겠지 - 브1
//15분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [c, ...input] = fs.readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < c; i++) {
  let [n, ...numbers] = input[i].split(" ").map(Number);

  let avg = numbers.reduce((pre, cur) => pre + cur, 0) / n;
  let count = 0;

  for (let j = 0; j < n; j++) {
    const number = numbers[j];

    if (number > avg) {
      count++;
    }
  }
  console.log(((count / n) * 100).toFixed(3) + "%");
}

//소수점 자릿수 지정 => toFixed()

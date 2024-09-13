//뒤집기
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("").map(Number);

let countZero = input.filter((v) => v === 0).length;
let countOne = input.filter((v) => v === 1).length;

//숫자가 0 또는 1 하나로만 이루어져 있으면
if (countZero === input.length || countOne === input.length) {
  console.log(0);
  return;
}

let changeOneToZero = 0;
let changeZeroToOne = 0;

//1을 0으로 바꾸기
let isOne = false;
for (let number of input) {
  if (number === 1 && !isOne) {
    changeOneToZero++;
    isOne = true;
  }
  if (number === 0) isOne = false;
}

//0을 1로 바꾸기
let isZero = false;
for (let number of input) {
  if (number === 0 && !isZero) {
    changeZeroToOne++;
    isZero = true;
  }
  if (number === 1) {
    isZero = false;
  }
}

console.log(Math.min(changeOneToZero, changeZeroToOne));

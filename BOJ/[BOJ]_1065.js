//한수 - 실버4
//20분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = +fs.readFileSync(path).toString().trim();

if (input < 100) {
  console.log(input);
  process.exit();
}

let result = 0;

for (let i = 100; i <= input; i++) {
  let count = 0;
  let numToStr = i.toString();

  let min = Number(numToStr[0]) - Number(numToStr[1]);
  let flag = true;

  for (let j = 1; j < numToStr.length - 1; j++) {
    let curChar = Number(numToStr[j]);
    let nextChar = Number(numToStr[j + 1]);

    if (curChar - nextChar !== min) {
      flag = false;
      break;
    }
  }
  if (flag) count++;
  result += count;
}

console.log(result + 99);

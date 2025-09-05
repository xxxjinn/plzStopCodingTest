//팰린드롬 만들기 - 실버3
//1시간 소요 - 못풂

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("");

/* 내풀이
for (let i = 0; i < input.length; i++) {
  let endIdx = input.length - 1 - i;
  let nextIdx = i + 1;

  if (input[i] === input[nextIdx] && input[i] !== input[endIdx]) {
    [input[endIdx], input[nextIdx]] = [input[nextIdx], input[endIdx]];
  }
  if (input[i] === input[endIdx]) {
    if (i === endIdx) break;
    if (input[i] > input[nextIdx]) {
      [input[i], input[nextIdx]] = [input[nextIdx], input[i]];
      [input[endIdx], input[endIdx - 1]] = [input[endIdx - 1], input[endIdx]];
    }
  }
}

let flag = false;

for (let i = 0; i < input.length; i++) {
  let endIdx = input.length - 1 - i;

  if (input[i] === input[endIdx]) continue;
  else {
    flag = true;
  }
}

console.log(flag ? "I'm Sorry Hansoo" : input.join(""));
*/

//문자의 개수를 셈
//문자열 길이가 짝수 -> 모든 문자의 개수가 짝수여야 함
//문자열 길이가 홀수 -> 홀수 개수를 가진 문자는 문장에서 딱 한 개만 있어야 함
//문자열 만들기 -> 각 문자의 개수를 절반만큼 사용, sort

let count = {};

for (let char of input) {
  count[char] = (count[char] || 0) + 1;
}

let oddChar = Object.keys(count).filter((v) => count[v] % 2 === 1);

if (oddChar.length > 1) {
  console.log("I'm Sorry Hansoo");
  process.exit();
}

let half = [];
let middle = oddChar.length === 1 ? oddChar[0] : "";

let keys = Object.keys(count).sort();

for (let key of keys) {
  half.push(key.repeat(Math.floor(count[key] / 2)));
}

let left = half.join("");
let right = left.split("").reverse().join("");

console.log(left + middle + right);

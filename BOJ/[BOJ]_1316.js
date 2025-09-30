//그룹 단어 체커
//실버5
//40분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let count = n;

for (let i = 0; i < input.length; i++) {
  let str = input[i];
  let arr = [];
  let flag = true;
  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    let nextChar = str[j + 1];

    if (arr.includes(char)) {
      if (char === nextChar) continue;
      flag = false;
      break;
    }

    if (char !== nextChar) {
      arr.push(char);
    }
  }
  if (!flag) count--;
}

console.log(count);

//더 간단한 버전
//includes는 배열 길이가 길어지면 비효율적이게 됨

let count2 = 0;

for (let word of input) {
  let set = new Set();
  let prev = "";
  let flag = true;

  for (let char of word) {
    if (char !== prev && set.has(char)) {
      flag = false;
      break;
    }
    set.add(char);
    prev = char;
  }

  if (flag) count2++;
}

console.log(count2);

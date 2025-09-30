//단어 공부 - 브론즈1
//30분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().toUpperCase().split("");

//내 풀이 => 또 복잡함.........
let set = new Set(input);
let obj = {};

for (const char of set) {
  let count = input.filter((v) => v === char).length; //(On^2)
  obj[char] = count;
}

let max = 0;
for (const char of set) {
  max = Math.max(max, obj[char]);
}

let sameValue = Object.values(obj).filter((v) => v === max);

console.log(
  sameValue.length > 1 ? "?" : Object.keys(obj).find((v) => obj[v] === max)
);

//습관적으로 set을 먼저 쓰고 다시 filter로 세는 것이 문제

//단순하게 => set 필요없음

let obj2 = {};

for (const char of input) {
  obj2[char] = (obj2[char] || 0) + 1; //=>어차피 키가 중복되어도 알아서 카운트
}

let max2 = Math.max(...Object.values(obj2));
let candidates = Object.keys(obj).filter((key) => obj[key] === max2);

console.log(candidates.length > 1 ? "?" : candidates[0]);

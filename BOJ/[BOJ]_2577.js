//숫자의 개수
//브론즈2
//10분 미만 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let cal = (input[0] * input[1] * input[2]).toString();
let obj = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

for (let i = 0; i < cal.length; i++) {
  let char = cal[i];
  obj[char] = obj[char] + 1;
}

console.log(Object.values(obj).join("\n"));

//덱 - 실4
//15분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let arr = [];
function push_front(x) {
  arr.unshift(x);
}

function push_back(x) {
  arr.push(x);
}

function pop_front() {
  return arr.length > 0 ? arr.shift() : -1;
}

function pop_back() {
  return arr.length > 0 ? arr.pop() : -1;
}

function size() {
  return arr.length;
}

function empty() {
  return arr.length === 0 ? 1 : 0;
}

function front() {
  return arr.length > 0 ? arr[0] : -1;
}

function back() {
  return arr.length > 0 ? arr[arr.length - 1] : -1;
}

let answer = [];

for (let i = 0; i < n; i++) {
  let [str, x] = input[i].split(" ");

  switch (str) {
    case "push_back":
      push_back(x);
      break;
    case "push_front":
      push_front(x);
      break;
    case "front":
      answer.push(front());
      break;
    case "back":
      answer.push(back());
      break;
    case "empty":
      answer.push(empty());
      break;
    case "pop_front":
      answer.push(pop_front());
      break;
    case "pop_back":
      answer.push(pop_back());
      break;
    case "size":
      answer.push(size());
      break;
  }
}

console.log(answer.join("\n"));

// 처음에 각 함수에서 console.log 찍게 했는데 그러니까 시간초과남
// => 한꺼번에 배열에 있는 수 Join하니까 시간초과문제 해결

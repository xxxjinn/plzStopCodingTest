//큐 - 실버4
//못풀었음
// for문(O(n), shift(O(n))인데 n이 2,000,000까지 나올 수 있어서 안됨
//1,000,000일 때 O(n)만 가능

//push, pop => O(1)

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let result = [];
let queue = [];
let head = 0;

for (let i = 0; i < n; i++) {
  let [command, number] = input[i].split(" ");

  if (command === "push") {
    queue.push(number);
  } else if (command === "back") {
    result.push(queue.length === head ? -1 : queue[queue.length - 1]);
  } else if (command === "front") {
    result.push(queue.length === head ? -1 : queue[head]);
  } else if (command === "pop") {
    result.push(queue.length === head ? -1 : queue[head++]);
  } else if (command === "size") {
    result.push(queue.length - head);
  } else if (command === "empty") {
    result.push(queue.length === head ? 1 : 0);
  }
}

console.log(result.join("\n"));

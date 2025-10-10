//스택 - 실버4
//15분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let result = [];
let stack = [];

for (let i = 0; i < n; i++) {
  let [command, number] = input[i].split(" ");

  if (command === "push") {
    stack.push(number);
  } else if (command === "top") {
    result.push(stack[stack.length - 1] ? stack[stack.length - 1] : -1);
  } else if (command === "pop") {
    const pop = stack.pop();
    result.push(pop ? pop : -1);
  } else if (command === "size") {
    result.push(stack.length);
  } else if (command === "empty") {
    result.push(stack.length === 0 ? 1 : 0);
  }
}

console.log(result.join("\n"));

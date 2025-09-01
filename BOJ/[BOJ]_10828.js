//스택 - 실버4
//30분 소요
//로직은 잘 풀었는데 시간초과 -> console.log를 매번 찍어주면 안됨 => 모아서 한 번에 나중에 출력하는 방식으로 해결

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [length, ...input] = fs.readFileSync(path).toString().split("\n");

let stack = [];
let result = [];

const push = (number) => {
  stack.push(number);
};

const top = () => {
  return stack[stack.length - 1] ? stack[stack.length - 1] : -1;
};

const size = () => {
  return stack.length;
};

const empty = () => {
  return stack.length === 0 ? 1 : 0;
};

const pop = () => {
  return stack.length === 0 ? -1 : stack.pop();
};

const main = () => {
  for (let i = 0; i < length; i++) {
    let [command, number] = input[i].split(" ");

    if (command === "push") {
      push(number);
    } else if (command === "top") {
      result.push(top());
    } else if (command === "pop") {
      result.push(pop());
    } else if (command === "empty") {
      result.push(empty());
    } else if (command === "size") {
      result.push(size());
    }
  }

  console.log(result.join("\n"));
};

main();

//그룹 단어 체커
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

let answer = 0;

for (let i = 0; i < n; i++) {
  let arr = input[i].split("");
  let current = arr[0];
  let set = new Set();
  set.add(current);

  let flag = true;

  for (let j = 1; j < arr.length; j++) {
    if (set.has(arr[j])) {
      if (current !== arr[j]) {
        flag = false;
        break;
      }
    }
    if (current !== arr[j]) {
      set.add(arr[j]);
      current = arr[j];
    }
  }

  if (flag) answer++;
}

console.log(answer);

//단어 공부 -브1
//11분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let string = fs.readFileSync(path).toString().trim().toUpperCase();

const map = {};

for (let i = 0; i < string.length; i++) {
  let char = string[i];
  map[char] = (map[char] || 0) + 1;
}

const max = Math.max(...Object.values(map));
console.log(
  Object.values(map).filter((v) => v === max).length > 1
    ? "?"
    : Object.keys(map)
        .filter((v) => map[v] === max)
        .join(""),
);

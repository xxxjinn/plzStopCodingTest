//크로아티아 알파벳
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let str = fs.readFileSync(path).toString().trim();

let alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let v of alphabet) {
  str = str.replaceAll(v, "*");
}
console.log(str.length);

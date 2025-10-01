//크로아티아 알파벳
//실버5
//10분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let str = fs.readFileSync(path).toString().trim();

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
//dz=랑 z= 순서가 바뀌면 dz=가 d+z=로 잘릴 수 있기 때문에 주의해야 함!

for (const a of alphabet) {
  str = str.replaceAll(a, "*");
}
console.log(str.length);

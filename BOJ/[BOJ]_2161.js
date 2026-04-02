//카드1-실5
//10분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(path).toString().trim();

let cards = [];

for (let i = 1; i <= input; i++) {
  cards.push(i);
}

let trash = [];

while (cards.length >= 1) {
  if (cards.length === 1) break;

  trash.push(cards.shift());
  cards.push(cards.shift());
}

//n이 1부터 되기때문에 이거 주의하기 ==> 쉬운 문제라도 문제 꼼꼼하게 읽어볼 것
let answer = trash.length > 0 ? trash.join(" ") + " " + cards[0] : cards[0];
console.log(answer);

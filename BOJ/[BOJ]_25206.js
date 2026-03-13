//너의 평점은 - 실5
//12분 소요

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

//전공평점 = 학점*과목평점 + 학점*과목평점...+ 학점*과목평점/학점의 총합

const scoreMap = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let sum = 0;
let scoreSum = 0;

for (let i = 0; i < 20; i++) {
  let [_, score, rating] = input[i].split(" ");

  score = +score;

  if (rating !== "P") {
    scoreSum += score;
    sum += score * scoreMap[rating];
  }
}

console.log(sum / scoreSum);

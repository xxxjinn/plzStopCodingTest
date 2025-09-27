//숫자 야구 - 실버3
//못풂

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

//영수 -> 세자리수 마음속으로 생각
//민혁 -> 자기가 조합해서 영수에게 물음

//만약
//민혁이가 말한 세 자리 수에 있는 숫자들 중 하나가 영수의 세 자리 수의 동일한 자리에 위치하면 스트라이크
//숫자가 영수의 세 자리 수에 있으나 다른 자리에 위치하면 볼

//input을 객체로 관리
let questions = input.map((line) => {
  let [num, s, b] = line.split(" ").map(Number);

  return { num: num.toString(), strike: s, ball: b };
});

//모든 후보 키 만들기
function candidatesFunc() {
  let arr = [];
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i === j) continue;
      for (let k = 1; k <= 9; k++) {
        if (i === k || j === k) continue;
        arr.push("" + i + j + k);
      }
    }
  }
  return arr;
}

let candidates = candidatesFunc();
let answer = 0;

//실제로 비교하고 체크
function check(candidate, question) {
  let strike = 0,
    ball = 0;

  for (let i = 0; i < 3; i++) {
    if (candidate[i] === question[i]) strike++;
    else if (candidate.includes(question[i])) ball++;
  }

  return { strike, ball };
}

for (let c of candidates) {
  let flag = true;
  for (let q of questions) {
    const { strike, ball } = check(c, q.num);

    if (strike !== q.strike || ball !== q.ball) {
      flag = false;
      break;
    }
  }

  if (flag) answer++;
}

console.log(answer);

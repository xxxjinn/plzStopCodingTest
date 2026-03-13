//단어 나누기 - 실버5
//50분 소요하고 못품

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let string = fs.readFileSync(path).toString().trim();

/*
let arr = [];

let start = 0;
let curChar = string[start];

let i = 1;

while (i < string.length) {
  let nextChar = string[i];

  if (curChar >= nextChar) {
    arr.push(string.slice(start, i + 1));
    start = i + 1;
    i++;
    curChar = string[start];
  }
  i++;

  if (i === string.length) { //마지막 처리도 아마 틀렸을듯?
    arr.push(string.slice(i - 1));
  }
}

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i].split("").reverse().join("");
}*/
//tc는 맞긴 한데 어쩼든 문제 접근 방식이 틀렸음
//내 풀이는 그리디로 접근한 것

//gpt 풀이 -> 완전탐색
//자를 위치 두 개를 전부 다 시도하기

let answer = null;
let n = string.length;

for (let i = 1; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    let a = string.slice(0, i).split("").reverse().join("");
    let b = string.slice(i, j).split("").reverse().join("");
    let c = string.slice(j).split("").reverse().join("");

    let cand = a + b + c;

    if (answer === null || cand < answer) {
      answer = cand;
    }
  }
}

console.log(answer);

//완전탐색(brute force)랑 그리디 구분

//완전탐색
//임의의 두 위치, 세 개 선택, 모든 경우, 가능한 경우
//보통 for문을 통해서 해결 가능

//그리디
//최소 횟수, 최대 개수, 가장 빨리, 가장 큰 ...

//지금 선택이 나중의 결과에 영향을 주면 완탐

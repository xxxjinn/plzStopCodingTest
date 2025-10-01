//요세푸스 문제 0
//실버4
//80분 소요
//못풂

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, k] = fs.readFileSync(path).toString().trim().split(" ").map(Number);

//또 너무 복잡하게 풀었음
let arr = [];
let answer = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let i = k - 1;
while (answer.length <= n) {
  if (answer.length === n) break;

  let deleteIndex = i % arr.length; //길이가 바뀔 때 인덱스를 유지하기 어렵게 함
  answer.push(arr[deleteIndex]);
  arr = [
    ...arr.slice(0, deleteIndex),
    ...arr.slice(deleteIndex + 1, arr.length), //매번 새 배열을 만들면 불필요하게 복잡하고 느려짐
  ];

  i = deleteIndex + k - 1; //이 부분을 잘못생각해서 gpt에게 물어봄
}

console.log("<" + answer.join(", ") + ">");

//간단한 풀이

//arr 간단하게 만들기
let arr2 = Array.from({ length: n }, (_, i) => i + 1);
let ans = [];

//queue 방식
while (arr2.length) {
  for (let i = 0; i < k - 1; i++) {
    arr2.push(arr2.shift());
  }
  ans.push(arr2.shift());
}

console.log("<" + ans.join(", ") + ">");

//문제를 풀 때 본질적으로 필요한 동작이 뭔가? => 원형 배열에서 k번째를 뽑기
//구현을 최대한 단순하게 하려고 하기
//불필요하게 slice, replaceAll, join같은 변환을 여러 번 돌리면 코드가 꼬이고 어려워짐

//프로그래밍 문세는 단순하게 반복하는 것 뿐인데, 수학문제를 푸는 것 처럼 공식을 만들어내려고 하지 말기

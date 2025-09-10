//로마 숫자 만들기 - 실버3
//60분 소요
//못풀음

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let n = +fs.readFileSync(path).toString().trim();

let arr = [1, 5, 10, 20];
let set = new Set();

function dfs(start, depth, sum) {
  if (depth === n) {
    set.add(sum);
    return;
  }

  for (let i = start; i < arr.length; i++) {
    dfs(start, depth + 1, sum + arr[i]);
  }
}

dfs(0, 0, 0);

console.log(set.size);

//n=2 -> for문 2번 중첩
//n=3 -> for문 3번 중첩 => 실제로 구현하는 건 불가능함

//재귀함수 해결
//1. 현재 상태를 변수로 만들어두기
//지금 몇 개를 뽑았는지, 지금까지의 합, 어디에서부터 선택할지
//2. base case 설정
//n만큼 뽑았으면 종료. 지금까지의 합을 저장
//3. 다음 단계로 진행
//남은 선택지를 순회하면서 재귀를 호출. (중복 허용 -> start부터 선택)

//재귀함수가 for문의 일반화 역할을 한 것

//문제를 작은 단위로 쪼갬 -> 상태를 매개변수로 전달 -> 끝나는 조건 설정 -> 재귀 호출

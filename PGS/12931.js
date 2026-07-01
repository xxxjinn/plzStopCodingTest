//자릿수 더하기

//1분 소요

function solution(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

console.log(solution(987));

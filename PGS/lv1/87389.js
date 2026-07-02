//나머지가 1이 되는 수 찾기
//3분 소요

function solution(n) {
  let x = 1;

  while (n % x !== 0) {
    x++;
  }

  return x;
}

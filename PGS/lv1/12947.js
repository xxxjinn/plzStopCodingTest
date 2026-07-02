//하샤드 수
//4분 소요

function solution(x) {
  let sum = x
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (x % sum === 0) {
    return true;
  }
  return false;
}

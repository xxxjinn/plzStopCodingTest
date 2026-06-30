//두 정수 사이의 합
//5분 소요

function solution(a, b) {
  let answer = 0;
  if (a === b) return a;

  let arr = [a, b].sort((a, b) => a - b);

  let num = arr[0];
  while (num <= arr[arr.length - 1]) {
    answer += num;
    num++;
  }
  return answer;
}

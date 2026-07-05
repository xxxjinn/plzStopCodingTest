//숫자의 표현

//25분 소요

function solution(n) {
  let answer = 0;

  let sum = 1;
  while (sum <= n) {
    let num = 0;
    for (let i = sum; i <= n; i++) {
      num += i;

      if (num === n) {
        answer++;
        break;
      }

      if (num > n) break;
    }
    sum++;
  }

  return answer;
}

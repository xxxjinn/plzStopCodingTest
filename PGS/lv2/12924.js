//숫자의 표현

//25분 소요

function solution(n) {
  let answer = 0;

  let sum = 1;
  while (sum <= n) {
    let flag = false;

    let num = 0;
    for (let i = sum; i <= n; i++) {
      num += i;

      if (num === n) {
        flag = true;
        break;
      }

      if (num > n) break;
    }
    if (flag) answer++;
    sum++;
  }

  return answer;
}

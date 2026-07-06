//피보나치 수
//25분 소요

/*function fibo(n) {
  if (n === 0) return 0;

  if (n === 2 || n === 1) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

function solution(n) {
  return fibo(n) % 1234567;
}*/

const arr = [0, 1];

function solution(n) {
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }

  return arr[n];
}

console.log(solution(50));

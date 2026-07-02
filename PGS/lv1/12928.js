//약수의 합

//4분 소요

function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }
  return arr.reduce((a, b) => a + b, 0);
}

console.log(solution(12));

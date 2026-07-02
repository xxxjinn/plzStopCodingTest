//x만큼 간격이 있는 n개의 숫자

//3분 소요

function solution(x, n) {
  let answer = [];

  for (let i = x; answer.length < n; i += x) {
    answer.push(i);
  }
  return answer;
}

//최댓값과 최솟값

//3분 소요

function solution(s) {
  let arr = s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  return [arr[0], arr[arr.length - 1]].join(" ");
}

console.log(solution("-1 -1"));

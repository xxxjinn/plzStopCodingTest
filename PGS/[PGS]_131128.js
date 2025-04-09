// 숫자 짝꿍

function solution(X, Y) {
  let answer = "";
  let arr = [];
  const xArr = Array(10).fill(0);
  const yArr = Array(10).fill(0);

  for (let i = 0; i < X.length; i++) {
    let cur = X[i];
    xArr[cur] += 1;
  }

  for (let i = 0; i < Y.length; i++) {
    let cur = Y[i];
    yArr[cur] += 1;
  }

  for (let i = 0; i < 10; i++) {
    if (xArr[i] !== 0) {
      if (xArr[i] >= yArr[i]) {
        for (let j = 0; j < yArr[i]; j++) arr.push(i);
      } else {
        for (let j = 0; j < xArr[i]; j++) arr.push(i);
      }
    }
  }

  if (arr.length === 0) return "-1";
  if (arr.filter((v) => v === 0).length === arr.length) return "0";

  arr.sort((a, b) => b - a);
  return arr.join("");
}

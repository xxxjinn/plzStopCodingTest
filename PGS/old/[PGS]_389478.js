// 2025 프로그래머스 코드챌린지 2차 예선 - 택배 상자 꺼내기

function solution(n, w, num) {
  let arr = [];
  let innerArr = [];
  let answer = 0;

  if (w === 1) return n - num + 1;

  for (let i = 1; i <= n; i++) {
    innerArr.push(i);
    if (i % w === 0) {
      arr.push(innerArr);
      innerArr = [];
    }
    if (n % w !== 0 && arr.length === parseInt(n / w)) {
      arr.push(innerArr);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i] = arr[i].reverse();
    }
  }

  if ((arr.length - 1) % 2 !== 0) {
    for (let i = arr[arr.length - 1].length; i < w; i++) {
      arr[arr.length - 1].unshift(-1);
    }
  } else {
    for (let i = arr[arr.length - 1].length; i < w; i++) {
      arr[arr.length - 1].push(-1);
    }
  }

  let number = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(num) !== -1) {
      number = i;
      break;
    }
  }

  let col = arr[number].indexOf(num);

  let colArr = [];

  for (let i = number; i < arr.length; i++) {
    colArr.push(arr[i][col]);
  }

  for (let i = colArr.length - 1; i >= 0; i--) {
    let curNum = colArr[i];
    if (curNum === -1) continue;
    answer++;
  }

  return answer;
}

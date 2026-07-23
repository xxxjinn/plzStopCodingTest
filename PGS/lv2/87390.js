//n^2 배열자르기
//힌트 - 50분 소요

/*

n이 10^7 이하까지 가능한데 지금 이중for문 돌렸으니까 배열은 10^14가 되어서 숫자가 너무 커짐
=> 메모리 초과

힌트: 배열을 만들지 말 것

function solution(n, left, right) {
  let answer = [];

  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
      arr[i][j] = i + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!arr[i][j]) {
        arr[i][j] = arr[i][j - 1] + 1;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    answer = answer.concat(arr[i]);
  }

  return answer.slice(left, right + 1);
}*/

function solution(n, left, right) {
  let answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(Math.floor(i / n), i % n) + 1);
  }

  return answer;
}

console.log(solution(4, 7, 14));

//알고리즘이 아니라 관찰 문제
//이유: n이 너무 큼 => 배열 문제가 아닌데?

//배열을 만들지 못한다면 직접 arr[i][j]를 계산할 수 있어야 함
// => 작은 예시를 만들어서 규칙 찾기

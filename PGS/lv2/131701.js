//연속 부분 수열 합의 개수
//35분 소요

function solution(elements) {
  let set = new Set();

  //1인 연속 부분 수열
  for (let i = 0; i < elements.length; i++) {
    set.add(elements[i]);
  }
  //elements.length인 연속 부분 수열
  set.add(elements.reduce((a, b) => a + b, 0));

  for (let i = 2; i < elements.length; i++) {
    let start = 0;

    while (start < elements.length) {
      let sum = 0;
      for (let j = 0; j < i; j++) {
        sum += elements[(start + j) % elements.length];
      }

      set.add(sum);

      start++;
    }
  }

  return set.size;
}

console.log(solution([7, 9, 1, 1, 4]));

//지금 풀이는 1000이하라서 O(n^3)임에도 통과함

//매번 합을 처음부터 계산하지 않는 슬라이딩 윈도우 방식 활용: O(n^2)

//[7,9,1,1,4]에서 길이가 3인 부분수열
//7+9+1 =17
//다음: 9+1+1임

//굳이 처음부터 다시 계산하지 않고,
// (7+9+1)-7+1 -> 이전 수열 합 - 빠지는 값 + 새로 들어오는 값

function sol(elements) {
  const n = elements.length;
  const set = new Set();

  for (let len = 1; len <= n; len++) {
    //첫 번째 구간의 합
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum += elements[i];
    }

    set.add(sum);

    //슬라이딩
    for (let start = 1; start < n; start++) {
      sum = sum - elements[start - 1] + elements[(start + len - 1) % n];

      set.add(sum);
    }
  }
}

//"연속된 구간의 합" 이라는 말이 나오면 다음 순서로 풀이를 생각해보자
//1. 누적합: 구간 합을 많이 구하는 문제
//2. 슬라이딩 윈도우: 구간의 길이가 고정
//3. 투 포인터: 구간의 길이가 변하면서 조건 만족

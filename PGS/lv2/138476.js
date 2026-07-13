//귤 고르기
//힌트보고 약 50분만에 품

function solution(k, tangerine) {
  let answer = 0;

  let map = {};

  /* 내가 풀었던 방식 
    for (let t of tangerine) {
    map[t] = 0;
  }

  for (let t of tangerine) {
    map[t] += 1;
  }*/

  //외우기!
  for (const t of tangerine) {
    map[t] = (map[t] || 0) + 1;
  }

  map = Object.values(map).sort((a, b) => b - a);

  let index = 0;
  while (k > 0) {
    if (k - map[index] < 0) {
      return answer + 1; //이 부분을 생각해내지 못해서 gpt한테 힌트받음
    }
    k -= map[index];
    answer++;
    index++;
  }
  return answer;
}

console.log(solution(4, [1, 1, 1, 2, 2]));

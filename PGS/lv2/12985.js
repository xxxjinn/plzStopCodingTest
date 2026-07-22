//예상 대진표
//40분 소요 - 못품

//내 풀이 -> 몇몇 테스트에서 시간초과 (44점)
function solution(n, a, b) {
  if (n === 2) return 1;

  let answer = 0;

  //a<b라는 조건이 있어야하는데 그러지 않아서 무한루프를 만들 때가 있어서 초과.
  while (a + 1 !== b || b % 2 !== 0) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    answer++;
  }

  return answer + 1;
}

console.log(solution(8, 4, 7));

//gpt 풀이
function solution(n, a, b) {
  if (n === 2) return 1;

  let answer = 0;

  while (a !== b) {
    //경기를 마치고 이긴 사람의 번호를 올림
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    //경기 마침 === 라운드에서 만남 === answer를 증가시킴
    answer++;
  }

  return answer;
}

//gpt식으로 풀이를 이해하는데 오랜 시간이 걸렸다.....

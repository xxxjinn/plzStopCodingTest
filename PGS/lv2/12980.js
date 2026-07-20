// 점프와 순간 이동
// 70분 소요

function solution(n) {
  let answer = 1;

  if (n === 1 || n === 2) return answer;

  //한 번에 k칸 앞으로 점프 -> k만큼 건전지가 줄어듬
  //순간이동: 현재까지 온 거리x2 위치로 이동 -> 건전지 줄지 않음

  //n만큼 이동할 때, 건전지 사용량 최소화

  while (n >= 2) {
    if (n === 2 || n === 1) break;

    if (n % 2 === 1) answer++;
    n = parseInt(n / 2);
  }

  //최소 건전지 사용량 return

  return answer;
}

console.log(solution(5000));

// 좀 더 나은 풀이
function solution(n) {
  let answer = 0;

  //한 번에 k칸 앞으로 점프 -> k만큼 건전지가 줄어듬
  //순간이동: 현재까지 온 거리x2 위치로 이동 -> 건전지 줄지 않음

  //n만큼 이동할 때, 건전지 사용량 최소화

  while (n > 0) {
    if (n % 2 === 1) answer++;
    n = Math.floor(n / 2);
  }

  //최소 건전지 사용량 return

  return answer;
}

//막힌지 15분쯤 넘었으면 바로 예시를 적어서 규칙을 찾자!

//과일 장수

function solution(k, m, score) {
  let answer = 0;
  let boxCount = parseInt(score.length / m);
  score = score.sort((a, b) => b - a);

  if (boxCount <= 0) return 0;

  let start = 0;
  let end = m;

  for (let i = 0; i < boxCount; i++) {
    let box = score.slice(start, end);
    start += m;
    end += m;
    answer += Math.min(...box) * m;
  }

  return answer;
}

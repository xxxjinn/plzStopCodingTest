// 명예의 전당

function solution(k, score) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    let currentScore = score[i];

    if (arr.length < k) arr.push(currentScore);
    else {
      if (currentScore > Math.min(...arr)) {
        arr.push(currentScore);
        arr.shift();
      }
    }
    answer.push(Math.min(...arr));
    arr = arr.sort((a, b) => a - b);
  }
  return answer;
}

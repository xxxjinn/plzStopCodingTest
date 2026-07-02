//음양 더하기
//2분 소요

function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    let num = absolutes[i];
    let sign = signs[i];

    if (sign) {
      answer += num;
      continue;
    }
    answer -= num;
  }
  return answer;
}

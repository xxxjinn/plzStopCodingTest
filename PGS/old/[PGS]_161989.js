//덧칠하기

function solution(n, m, section) {
  let answer = 0;
  let coloredIdx = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > coloredIdx) {
      answer++;
      coloredIdx = section[i] + m - 1;
    }
  }

  return answer;
}

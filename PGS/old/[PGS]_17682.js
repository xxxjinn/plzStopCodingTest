// 2018 KAKAO BLIND RECRUITMENT [1차] 다트게임

function solution(dartResult) {
  const answer = [];

  const regex = /(\d{1,2}[SDT][*#]*)/g;
  const sections = dartResult.match(regex);
  const bonusMap = { S: 1, D: 2, T: 3 };

  sections.forEach((section, i) => {
    const num = parseInt(section.match(/\d+/)[0]);
    const bonus = section.match(/[SDT]/)[0];
    const option = section.match(/[*#]/g) || [];

    let score = Math.pow(num, bonusMap[bonus]);

    option.forEach((opt) => {
      if (opt === "*") {
        score *= 2;
        if (i > 0) answer[i - 1] *= 2;
      } else if (opt === "#") {
        score *= -1;
      }
    });

    answer.push(score);
  });
  return answer.reduce((a, b) => a + b);
}

// 2022 KAKAO TECH INTERNSHIP 성격 유형 검사하기

function solution(survey, choices) {
  let answer = "";
  let typeScoreMap = {};
  let types = ["R", "T", "C", "F", "J", "M", "A", "N"];
  for (let i = 0; i < types.length; i++) {
    typeScoreMap[types[i]] = 0;
  }

  let choiceScoreMap = new Map();
  let score = 3;

  for (let i = 1; i <= 7; i++) {
    choiceScoreMap.set(i, score);
    if (i <= 3) score--;
    else if (i >= 4) score++;
  }

  for (let i = 0; i < survey.length; i++) {
    let currentChoice = choices[i];
    let firstChar = survey[i][0];
    let secondChar = survey[i][1];

    switch (currentChoice) {
      case 1:
      case 2:
      case 3:
        typeScoreMap[firstChar] += choiceScoreMap.get(currentChoice);
        break;
      case 4:
        break;
      case 5:
      case 6:
      case 7:
        typeScoreMap[secondChar] += choiceScoreMap.get(currentChoice);
        break;
    }
  }

  const scoreArr = Object.entries(typeScoreMap);

  for (let i = 0; i < scoreArr.length; i += 2) {
    const firstType = scoreArr[i][0];
    const secondType = scoreArr[i + 1][0];

    const firstScore = scoreArr[i][1];
    const secondScore = scoreArr[i + 1][1];

    if (firstScore > secondScore) {
      answer += firstType;
    } else if (firstScore < secondScore) {
      answer += secondType;
    } else {
      answer += firstType < secondType ? firstType : secondType;
    }
  }

  return answer;
}

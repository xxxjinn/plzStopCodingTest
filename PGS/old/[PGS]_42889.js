// 2019 KAKAO BLIND RECRUITMENT 실패율

function solution(N, stages) {
  let answer = [];

  // 스테이지 낮은 것 부터 오름차순 정렬
  stages.sort((a, b) => a - b);

  // stage와 실패율 map 초기화 (키: stage, 값: 실패율)
  let stageFailMap = {};
  for (let i = 1; i <= N; i++) {
    stageFailMap[i] = 0;
  }

  let stageNumber = 1;
  while (stages.length > 0) {
    let users = stages.length;
    let fail = stages.filter((v) => v === stageNumber).length / users;

    if (stageFailMap[stageNumber] === 0) stageFailMap[stageNumber] = fail;

    stages = stages.filter((v) => v !== stageNumber);
    stageNumber++;
  }

  const sortedKeys = Object.entries(stageFailMap)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => parseInt(key));

  return sortedKeys;
}

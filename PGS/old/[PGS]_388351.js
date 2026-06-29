// [2025 프로그래머스 코드챌린지 1차 예선] 유연근무제

function solution(schedules, timelogs, startday) {
  let answer = 0;

  for (let i = 0; i < timelogs.length; i++) {
    let hopeTime = schedules[i];
    let availableHour = parseInt(hopeTime / 100);
    let availableMin = (hopeTime % 100) + 10;

    if (availableMin >= 60) {
      availableHour++;
      availableMin = availableMin - 60;
    }

    let availableTime = availableHour * 100 + availableMin;

    let timelog = timelogs[i];
    let flag = false;

    for (let j = 0; j < timelog.length; j++) {
      if (flag) break;

      let satIndex = 6 - startday === -1 ? 6 : 6 - startday;
      let sunIndex = 6 - (startday - 1);

      if (j === satIndex || j === sunIndex) continue;

      let time = timelog[j];

      if (time > availableTime) {
        flag = true;
      }
    }

    if (!flag) answer++;
  }
  return answer;
}

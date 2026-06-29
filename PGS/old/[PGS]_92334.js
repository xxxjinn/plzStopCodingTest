// 2022 KAKAO BLIND RECRUITMENT 신고 결과 받기

function solution(id_list, report, k) {
  let answer = [];
  let record = {};
  let reported = {};
  let stoppedId = [];

  //한 유저가 신고한 아이디, 횟수 초기화
  for (let i = 0; i < id_list.length; i++) {
    record[id_list[i]] = {};
    for (let j = 0; j < id_list.length; j++) {
      if (id_list[i] !== id_list[j]) record[id_list[i]][id_list[j]] = 0;
    }
  }

  //각 유저의 아이디:신고당한 횟수
  for (let i = 0; i < id_list.length; i++) {
    reported[id_list[i]] = 0;
  }

  //한 유저가 다른 유저를 신고
  for (let i = 0; i < report.length; i++) {
    let [user, repoter] = report[i].split(" ");

    if (record[user][repoter] < 1) record[user][repoter]++;
  }

  //각 유저의 아이디:신고당한 횟수 적용
  for (const key in record) {
    for (const user in record[key]) {
      reported[user] += record[key][user];
    }
  }

  //정지된 아이디 배열 넣기
  for (const key in reported) {
    if (reported[key] >= k) stoppedId.push(key);
  }

  for (const key in record) {
    let count = 0;
    for (const user in record[key]) {
      if (record[key][user] === 1 && stoppedId.includes(user)) {
        count++;
      }
    }
    answer.push(count);
  }

  return answer;
}

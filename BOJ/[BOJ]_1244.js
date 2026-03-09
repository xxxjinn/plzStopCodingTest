// 스위치 켜고 끄기 - 실4
// 1시간 소요 (출력 관련 gpt 힌트)

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let switchsNumber = input[0];
let switchStatus = input[1].split(" ");
let studentsNumber = input[2];
let info = input.slice(3);

for (let i = 0; i < studentsNumber; i++) {
  let [student, switchNum] = info[i].split(" ");

  //남자 - 스위치 번호가 자기가 받은 수의 배수이면 그 스위치의 상태를 바꿈
  if (student === "1") {
    for (let j = 0; j < switchsNumber; j++) {
      if ((j + 1) % switchNum === 0) {
        if (switchStatus[j] === "0") {
          switchStatus[j] = "1";
          continue;
        }
        switchStatus[j] = "0";
      }
    }
    continue;
  }

  //여자 - 자기가 받은 수와 같은 번호가 붙은 스위치를 중심으로 좌우가 대칭이면서,
  //      가장 많은 스위치를 포함하는 구간을 찾아서 그 구간에 속한 스위치의 상태를 모두 바꿈

  let center = switchNum - 1;
  let prev = center - 1;
  let next = center + 1;

  while (prev >= 0 && next < switchsNumber) {
    if (switchStatus[prev] === switchStatus[next]) {
      prev--;
      next++;
      continue;
    }
    break;
  }

  /*
    while(prev <=0 && next <switchsNumber && switchStatus[prev]===switchStatus[next]){
        ~~
    }
    형태였다면 continue와 break를 작성하지 않아도 되었을 것. .
    */

  for (let j = prev + 1; j <= next - 1; j++) {
    if (switchStatus[j] === "0") {
      switchStatus[j] = "1";
      continue;
    }
    switchStatus[j] = "0";
  }
}

//n개씩 출력하는 패턴 외우기
for (let i = 0; i < switchsNumber; i += 20) {
  console.log(switchStatus.slice(i, i + 20).join(" "));
}

//인덱스 0부터 시작하는걸 머릿속으로 헷갈려해서 시간이 오래걸리는듯?
// 해결법: 종이에 적어보기

//while문 조건에서도 불필요하게 시간을 잡아먹음

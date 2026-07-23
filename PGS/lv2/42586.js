//기능개발
//20분 소요

function solution(progresses, speeds) {
  let answer = [];

  //진도 100%일 때 서비스에 반영 가능
  //뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있음
  //근데 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됨

  //progresses: 배포되어야하는 순서대로 작업 진도
  //speeds: 각 작업의 개발 속도

  let days = [];

  for (let i = 0; i < progresses.length; i++) {
    let currentProgress = progresses[i];
    let currentSpeed = speeds[i];

    let day = Math.ceil((100 - currentProgress) / currentSpeed);
    days.push(day);
  }

  let count = 1;
  let preDay = days[0];
  for (let i = 1; i < days.length; i++) {
    let curDay = days[i];

    if (preDay >= curDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      preDay = curDay;
    }

    if (i === days.length - 1) answer.push(count);
  }

  //배포는 하루에 한 번만, 하루의 끝에 이루어짐

  //각 배포마다 몇 개의 기능이 배포되는가?
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));

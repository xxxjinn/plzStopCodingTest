//10:25 시작
//1시간 30분 소요 - 못품

const sig = [
  [2, 1, 2],
  [5, 1, 1],
];

function isYellow(signal, time) {
  const [g, y, r] = signal;
  const cycle = g + y + r;

  let t = time % cycle;

  if (t === 0) t = cycle;

  return t > g && t <= g + y;
}

function solution(signals) {
  //힌트
  //각 신호등의 한 사이클의 길이를 가장 먼저 계산해야 함

  //각 신호등이 t초에 무슨 색인지 판별하는 함수 구현

  // 각 신호등의 모든 주기의 최소공배수를 구함
  //최소공배수 이후부터는 모든 신호등의 상태가 처음과 똑같이 반복됨
  //1~최소공배수까지만 검사하면 됨

  //최소공배수 구하는 부분 (신호등이 최대 5개라서 지금은 괜찮은데, 외우는 것이 좋음)
  let limit = signals[0][0] + signals[0][1] + signals[0][2];

  for (let i = 1; i < signals.length; i++) {
    let cycle = signals[i][0] + signals[i][1] + signals[i][2];

    let num = limit;

    while (num % cycle !== 0) {
      num += limit;
    }

    limit = num;
  }

  for (let time = 1; time <= limit; time++) {
    let ok = true;

    for (let i = 0; i < signals.length; i++) {
      if (!isYellow(signals[i], time)) {
        ok = false;
        break;
      }
    }

    if (ok) {
      return time;
    }
  }

  return -1;

  //모든 신호등이 노란불이 되는 가장 빠른 시각을 return
  //모든 신호등이 노란불이 되는 경우가 없다면 -1 return
}

//신호등 n개 (최소 2개, 최대 5개)
//초록불 -> 노란불 -> 빨간불 순서로 반복
//지속 시간은 신호등마다 다름
//1초부터 시작, 각 신호등은 처음에 초록불 상태로 시작
//모든 신호등이 모두 노란불이 되면 정전이 발생

console.log(solution(sig));

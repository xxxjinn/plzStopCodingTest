//프로세스
//힌트보고 품 - 50분 소요

function solution(priorities, location) {
  let answer = 0;

  let queue = [];

  for (let i = 0; i < priorities.length; i++) {
    queue.push([priorities[i], i === location]);
  }

  while (queue.length > 0) {
    let [priority, isTarget] = queue.shift();

    /* 리팩토링: some() 사용
    let flag = false;
    for (let j = 0; j < queue.length; j++) {
      let [p, _] = queue[j];

      if (p > priority) {
        flag = true;
        break;
      }
    }*/

    //some(조건)=> 배열 안에 조건을 만족하는 원소가 하나라도 있으면 true 반환

    let flag = queue.some((v) => v[0] > priority);

    if (flag) {
      queue.push([priority, isTarget]);
    } else {
      answer++;
      if (isTarget) return answer;
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));

//location을 직접 계산하려고 하니까 위치가 정렬하면서 계속 바뀌어서 어려움이 있었음
//힌트: queue 자체에 location까지 생각해서 계산

// 기사단원의 무기

function solution(number, limit, power) {
  let answer = 0;
  let attackPower = [];

  for (let i = 1; i <= number; i++) {
    let count = 0;
    const sqrt = Math.sqrt(i);
    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0) {
        count++;
        if (j !== i / j) count++;
      }
    }
    attackPower.push(count);
  }

  for (let i = 0; i < attackPower.length; i++) {
    if (attackPower[i] > limit) attackPower[i] = power;
    answer += attackPower[i];
  }

  return answer;
}

//[PCCP 기출문제] 1번 붕대 감기

function solution(bandage, health, attacks) {
  let answer = health;
  const finalAttackTime = attacks[attacks.length - 1][0];
  let successStack = 0;
  let [t, x, y] = bandage;

  for (let time = 1; time <= finalAttackTime; time++) {
    if (answer <= 0) break;
    let attacksShift = attacks.shift();

    let [currentAttackTime, currentAttackPower] = attacksShift;

    if (time === currentAttackTime) {
      answer -= currentAttackPower;
      successStack = 0;
    } else {
      attacks.unshift(attacksShift);
      successStack++;
      if (answer < health) {
        if (successStack === t) {
          answer += y;
          successStack = 0;
        }
        answer += x;
        if (answer > health) answer = health;
      }
    }
  }
  return answer <= 0 ? -1 : answer;
}

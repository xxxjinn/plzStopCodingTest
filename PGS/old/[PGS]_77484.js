// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let recordMap = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 }; //일치:등수
  let zeroCount = lottos.filter((v) => v === 0).length;

  if (zeroCount === lottos.length) return [1, 6];

  let sameCount = 0;
  for (let i = 0; i < 7; i++) {
    let lottoNum = lottos[i];
    if (win_nums.includes(lottoNum)) sameCount++;
  }
  if (sameCount === 6) return [1, 1];

  return [recordMap[zeroCount + sameCount], recordMap[sameCount]];
}

//H-index
//힌트 보고 품 - 50분 소요

function solution(citations) {
  //H-index: 과학자의 생산성&&영향력

  //논문 n편 중 h번 이상 인용된 논문이 h편 이상 && 나머지 논문이 h번 이하
  //h의 최댓값=H-index

  let n = citations.length;
  let h = Math.max(...citations);

  for (let i = h; i >= 0; i--) {
    let upper = [];
    let lower = [];
    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= i) {
        upper.push(citations[j]);
      }
    }

    for (let j = 0; j < citations.length; j++) {
      if (!upper.includes(citations[j])) {
        lower.push(citations[j]);
      }
    }

    if (upper.length >= i && n - upper.length === lower.length) return i;
  }
}

console.log(solution([3, 0, 6, 1, 5]));

//lower가 꼭 필요한가?
//그렇지 않음

//lower.length= n- upper.length
//나머지 논문은 h번 이하 인용 => 첫 번째 조건만 만족하면 자동으로 성립함
//upper >=h, 나머지는 자동으로 <h가 됨

//나는 두 번째 조건에 좀 꽂혀있었던 것 같음... 머리를 잘 굴려보면 자동으로 되는거니까 불필요한데

//간단한 풀이
for (let i = h; i >= 0; h--) {
  let count = 0;

  for (const c of citations) {
    if (c >= i) count++;
  }

  if (count >= i) return i;
}

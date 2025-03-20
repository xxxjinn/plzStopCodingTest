//문자열 나누기

function solution(s) {
  let answer = 0;
  let arr = [...s];

  while (arr.length > 0) {
    let x = arr[0];

    let sameCount = 0;
    let notSameCount = 0;
    let index = 0;

    for (let i = index; i < arr.length; i++) {
      if (notSameCount !== 0 && sameCount === notSameCount) {
        index = i;
        break;
      }
      if (x === arr[i]) sameCount++;
      else notSameCount++;
    }
    arr = arr.slice(index, arr.length);
    answer++;

    if (index === 0 && arr.length !== 0) break;
  }
  return answer;
}

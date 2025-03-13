//가장 가까운 같은 글자

//내 풀이 (시간복잡도 O(n^2))
function solution(s) {
  let answer = [-1];
  let arr = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      answer.push(-1);
    } else {
      for (let j = 0; j < arr.length; j++) {
        let char = arr[j];
        if (char === s[i]) {
          answer.push(i - j);
          arr[j] = "*";
          break;
        }
      }
    }
    arr.push(s[i]);
  }
  return answer;
}

//객체를 이용한 풀이법 (지피티에게 요청 -> 시간복잡도 O(n))
function solution(s) {
  let answer = [];
  let indexMap = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (indexMap[char] === undefined) answer.push(-1);
    else answer.push(i - indexMap[char]);

    indexMap[char] = i;
  }
}

//올바른 괄호
// 힌트보고 스스로 로직을 짜서 풀었음
//70분 소요

function solution(s) {
  //무조건 "("로 시작해야 true임
  if (s[0] === ")") return false;

  let numOfOpen = 1;

  for (let i = 1; i < s.length; i++) {
    let char = s[i];

    if (numOfOpen === -1) return false;

    if (char === "(") {
      numOfOpen++;
      continue;
    }

    numOfOpen--;
  }

  return numOfOpen !== 0 ? false : true;
}

console.log(solution("(()("));

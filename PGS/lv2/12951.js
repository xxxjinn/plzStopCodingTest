//JadenCase 문자열 만들기

//22분 소요

function solution(s) {
  let lc = s.toLowerCase();

  let arr = lc.split("");

  for (let i = 0; i < arr.length; i++) {
    let preChar = arr[i - 1];

    if ((preChar === " " || preChar === undefined) && arr[i] !== " ")
      arr[i] = arr[i].toUpperCase();
  }

  return arr.join("");
}

console.log(solution("people   unFollOwed me"));

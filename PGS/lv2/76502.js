//괄호 회전하기
//20분 소요

function solution(s) {
  let answer = 0;

  let arr = s.split("");

  //정확히 괄호 스택 부분이 기억이 안나서 더듬더듬 풀었더니 요렇게..
  const check = (str) => {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      stack.push(char);

      if (char === "]" && stack[stack.length - 2] === "[") {
        stack.pop();
        stack.pop();

        continue;
      }
      if (char === ")" && stack[stack.length - 2] === "(") {
        stack.pop();
        stack.pop();

        continue;
      }
      if (char === "}" && stack[stack.length - 2] === "{") {
        stack.pop();
        stack.pop();

        continue;
      }
    }

    return stack.length > 0 ? false : true;
  };

  if (check(s)) answer++;

  for (let i = 1; i < s.length; i++) {
    arr.push(arr.shift());
    let str = arr.join("");
    if (check(str)) answer++;
  }
  return answer;
}

console.log(solution("[](){}"));

//정석 check
const check = (str) => {
  const pair = {
    ")": "(",
    "}": "{",
    "[": "]",
  };

  let stack = [];

  for (const char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      continue;
    }

    if (stack.pop() !== pair[char]) return false;

    //끝났을 때 여는 괄호가 남아있는지 확인하기 위해
    return stack.length === 0;
  }
};

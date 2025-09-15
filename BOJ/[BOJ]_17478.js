//재귀함수가 뭔가요? - 실버5
//그러게..
//50분 소요
//풀었음

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = +fs.readFileSync(path).toString().trim();

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
const char = "_";
let flag = false;

function dfs(depth, count) {
  if (depth === n) {
    flag = true;
    console.log(char.repeat(count) + '"재귀함수가 뭔가요?"');
    console.log(
      char.repeat(count) + '"재귀함수는 자기 자신을 호출하는 함수라네"'
    );
    console.log(char.repeat(count) + "라고 답변하였지.");
    return;
  }

  console.log(char.repeat(count) + '"재귀함수가 뭔가요?"');
  console.log(
    char.repeat(count) +
      '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.'
  );
  console.log(
    char.repeat(count) +
      "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지."
  );
  console.log(
    char.repeat(count) +
      '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."'
  );

  for (let i = depth + 1; i <= n; i++) {
    if (flag) {
      return;
    }
    dfs(i, count + 4);
    console.log(char.repeat(count) + "라고 답변하였지.");
  }
}

dfs(0, 0);

/** 간단한 풀이 (flag 불필요)
 * function dfs(depth){
 * const indent = char.repeat(depth*4);
 * console.log(indent+'"재귀함수가 뭔가요?"');
 * 
 * if (depth === n) {
    console.log(indent + '"재귀함수는 자기 자신을 호출하는 함수라네"');
  } else {
    console.log(
      indent +
        '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.'
    );
    console.log(
      indent +
        "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지."
    );
    console.log(
      indent +
        '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."'
    );
    dfs(depth+1);
}
    console.log(indent+"라고 답변하였지.");
}
    dfs(0);
 */

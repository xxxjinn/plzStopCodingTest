//토크나이저 - 실버3
//60분 이상 소요 - 못풂

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString();

const separator = ["<", ">", "&&", "||", "(", ")", " "];

function tokenizer(string) {
  let arr = [];
  let token = "";

  let index = 0;

  while (index < string.length) {
    let char = string[index];

    //2글자 구분자 체크
    let twoChar = string.slice(index, index + 2);
    if (separator.includes(twoChar)) {
      if (token.length > 0) {
        arr.push(token);
        token = "";
      }
      arr.push(twoChar);
      index += 2;
      continue;
    }

    //1글자 구분자
    if (separator.includes(char)) {
      if (token.length > 0) {
        arr.push(token);
        token = "";
      }
      if (char !== " ") {
        arr.push(char);
      }
      index++;
      continue;
    }

    //일반 문자
    token += char;
    index++;
  }

  //마지막 남은거 처리
  if (token.length > 0) {
    arr.push(token);
  }

  //토큰들을 공백으로 구분해 출력
  //토큰이 공백일 경우 출력하지 않음
  console.log(arr.join(" "));
}

tokenizer(input);

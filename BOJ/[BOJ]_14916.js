//거스름돈 - 못풀었음

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = +fs.readFileSync(path).toString().trim();

let answer = 0;

//-1이 나오는 경우는 1 또는 3일 때 밖에 없다
if (input === 1 || input === 3) console.log(-1);

while (input > 0) {
  //숫자가 홀수이거나 5로 나눠떨어진다면
  //input-5를 한다
  if (input % 2 === 1 || input % 5 === 0) {
    input -= 5;
    answer += 1;
  } else if (input % 2 === 0) {
    //숫자가 짝수면
    input -= 2; //input-2를 한다
    answer += 1;
  }
}

console.log(answer);

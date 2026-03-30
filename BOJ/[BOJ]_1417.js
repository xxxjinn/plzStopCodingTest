//국회의원 선거 - 실5
//구현

//못품

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");

//다른 모든 사람의 득표수보다 많은 득표수를 가질 때 당선됨

let dasom = +input.shift();
input = input.map(Number);

let answer = 0;

/*
30분만에 푼 풀이 ==> 틀림
const isDasomWin = () => {
  return input.filter((v) => v < dasom).length === input.length;
};

while (!isDasomWin()) {
  for (let i = 0; i < n - 1; i++) {
    if (input[i] >= dasom) {
      input[i] -= 1;
      dasom++;
      answer++;
    }
  }
}


tc도 다 맞는데 틀릴게 뭐가있지?
gpt한테 물어보니까 그리디로 풀어야하고 그렇지 않은 반례가 있다고 함

내가 어케알아
*/

//해결 => 가장 득표수가 많은 후보의 지지자를 깎기

while (true) {
  let max = Math.max(...input);

  if (dasom > max) break;

  let idx = input.indexOf(max);
  input[idx]--;
  dasom++;
  answer++;
}

console.log(answer);

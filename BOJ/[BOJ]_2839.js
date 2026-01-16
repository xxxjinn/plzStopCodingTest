// 설탕 배달 - 실버4
// 못품

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let n = fs.readFileSync(path).toString().trim();

// 그리디랑 DP 구분
// 처음에 DP라고 해서 풀었는데 어떻게해도 점화식 도출이 불가능해서 gpt한테 물어보니까 그리디로 푸는 문제!

// 그리디랑 DP 구분 방법
// 1. 경우의 수 => DP
// 2. 최소/최대 -> 선택이 단순 => 그리디 / 선택이 복잡 => DP
// 3. 이전의 결과를 또 사용해야 하는지? -> NO => 그리디 / YES => DP

// 일단 5를 빼야 최소한으로 들고갈 수 있다는 것은 알긴 했는데... 그러면 뭐해 못푸는데

let five = Math.floor(n / 5); //5킬로그램 설탕봉지 개수
let answer = -1;

while (five >= 0) {
  const rest = n - five * 5;

  if (rest % 3 === 0) {
    answer = five + rest / 3;
    break;
  }

  five--;
}

console.log(answer);

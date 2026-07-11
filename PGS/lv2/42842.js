//카펫
//약 50분 소요

//내 풀이 문제점
//1.규칙을 생각해냈는데 식이 직관적이지 않음 -> 반례가 생기기 쉬움
//2.더 많은 경우의 수까지 쓸데없이 계산하게 됨
//3.문제를 너무 어렵게 생각했음
function solution(brown, yellow) {
  //카펫의 가로 길이는 세로 길이와 같거나 길다
  let answer = [];

  //브라운 기준, 최대 width가 될 수 있는 값?
  //10이라면 10/2=5 아님. 10/2-1이 최댓값. 여기에서부터 감싸고 돌면서 시작해보기?
  //width 최대값 안되면 거기에서 또 -1을 해보기

  let brownWidth = brown / 2 - 1;

  while (brownWidth > 0) {
    let yellowWidth = brownWidth - 2;
    while (yellowWidth > 0) {
      if (
        yellowWidth === yellow ||
        ((brown - brownWidth * 2) / 2) * yellowWidth === yellow
      ) {
        answer = [(brown - brownWidth * 2) / 2 + 2, brownWidth];
        break;
      }
      yellowWidth--;
    }

    brownWidth--;
  }
  return answer;
}

console.log(solution(24, 24));

//gpt
//이 문제에서 가장 먼저 떠올리는 것: 전체 넓이 = brown + yellow

//e.g. brown=24, yellow=24, 전체=48
//그러면 48의 약수만 보면 됨

//(1,48), (2,24), (3,16), (4,12), (6,8)

/**고칠 점: 구현하기 전에 더 간단한 수학적 성질이 있는지 먼저 찾기 */

let total = brown + yellow;

//갈색은 어차피 테두리 한 줄
//그니까 노란색의 넓이를 구하면 됨
for (let h = 1; h * h <= total; h++) {
  //h*h<=total인 이유: 약수 성질때문
  //1*48, 2*24, 3*16, 4*12, 6*8, 8*6, 12*4, 16*3, 24*2, 48*1
  //6*8, 8*6 이렇게 대칭이 되니까 어차피 순서만 바뀐거임.
  //순서가 바뀌는 지점은 가로와 세로가 같아지는 지점이라고 치면 됨
  //근데 원래는 제곱근인데 코드에서 제곱근을 계산하지는 않고 간단하게

  if (total % h !== 0) continue;

  let w = total / h;

  //카펫 전체 w에서 2를 빼는 이유는 brown이 양쪽에서 테두리를 차지하고 있으니까
  //h도 마찬가지
  if ((w - 2) * (h - 2) === yellow) {
    return [w, h];
  }
}

//겹치지 않는 모든 약수의 쌍 확인하는 코드
let arr = [];
for (let h = 1; h * h <= total; h++) {
  if (total % h !== 0) continue;

  let w = total / h;

  arr.push([w, h]);
}

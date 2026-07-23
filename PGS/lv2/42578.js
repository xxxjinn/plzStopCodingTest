//의상
//70분 소요 - 힌트 보고 풀었음

/*
힌트: 조합틀 모두 계산하는 방식으로 가려고 해서 너무 어렵게 접근하고 있음
function solution(clothes) {
  let answer = clothes.length; //각 의상마다 1개씩 계산

  let map = {};
  for (const [_, type] of clothes) {
    map[type] = (map[type] || 0) + 1;
  }

  //keys에서 2개부터 종류개까지 뽑아내기가 필요함
  let keys = Object.keys(map);

  if (keys.length === 1) return answer;

  return answer + Object.values(map).reduce((a, b) => a * b, 1);
}*/

function solution(clothes) {
  let map = {};
  for (const [_, type] of clothes) {
    map[type] = (map[type] || 0) + 1;
  }

  let values = Object.values(map);

  return values.map((v) => v + 1).reduce((a, b) => a * b, 1) - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ]),
);

//알고리즘이 아니라 발상이 필요한 문제
//내 문제점: 이렇게 구현하면 될듯? 하는 길을 찾으면 너무 오래동안 붙잡고 있음
//20~30분이 지나도 발상에서 막혀 있다는 느낌이 들면 "직접 만드는 문제가 아닌가?" 의심하는 습관이 필요!

//구분법
//구현이 보임 -> 알고리즘 문제일 가능성이 높음
//구현이 안보임 -> 발상 문제일 가능성이 높음
//제한 조건이 너무 큼
//"모든 경우를 구하라" -> 조합 개수가 너무 커질 때 세지 않고 계산하는 방법이 있는지 생각해봐야 함
//예제 직접 적어보기

//문제를 어떤 관점에서 바라볼지를 찾는 데 시간이 오래 걸리는 편

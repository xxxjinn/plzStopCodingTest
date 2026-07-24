//롤케이크 자르기
//힌트 보고 품 - 60분 소요

/*
시간초과 slice=O(n)
function solution(topping) {
  let answer = 0;

  //잘랐을 때 나눈 토핑의 가짓수만 일치하면 됨
  for (let i = 1; i < topping.length; i++) {
    let olderSet = new Set(topping.slice(0, i));
    let youngerSet = new Set(topping.slice(i));

    console.log(olderSet, youngerSet);

    if (olderSet.size === youngerSet.size) answer++;
  }
  return answer;
}*/

function solution(topping) {
  let answer = 0;

  let map = {};

  for (let i = 0; i < topping.length; i++) {
    map[topping[i]] = (map[topping[i]] || 0) + 1;
  }

  let mapKind = Object.keys(map).length;

  let set = new Set();

  for (let i = 0; i < topping.length; i++) {
    let currentTopping = topping[i];

    map[currentTopping] -= 1;

    set.add(currentTopping);

    if (map[currentTopping] === 0) {
      delete map[currentTopping];
      mapKind--;
    }

    if (mapKind === set.size) answer++;
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));

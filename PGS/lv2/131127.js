//할인 행사
//23분 소요

function solution(want, number, discount) {
  let answer = 0;

  //일정 금액 지불 시 10일동안 회원
  //회원을 대상으로 매일 한 가지 제품을 할인
  //할인하는 제품은 하루에 하나씩만 구매 가능

  //자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속 일치할 경우 회원가입

  let map = {};

  for (let i = 0; i < want.length; i++) {
    map[want[i]] = (map[want[i]] || 0) + number[i];
  }

  let start = 0;

  while (discount.length - start >= 10) {
    let countMap = {};

    let flag = true;

    for (let i = start; i < start + 10; i++) {
      countMap[discount[i]] = (countMap[discount[i]] || 0) + 1;
    }

    for (let i = 0; i < want.length; i++) {
      if (map[want[i]] !== countMap[want[i]]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      answer++;
    }
    start++;
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ],
  ),
);

//지금 풀이도 괜찮은데, 10일 연속이니까 슬라이딩 윈도우 활용해도 좋았을 것 같음!

// 카드 뭉치

function solution(cards1, cards2, goal) {
  let string = "";

  for (let word of goal) {
    if (cards1[0] === word) string += cards1.shift();
    if (cards2[0] === word) string += cards2.shift();
  }

  return goal.join("") === string ? "Yes" : "No";
}

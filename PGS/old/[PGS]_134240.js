function solution(food) {
  let answer = [];

  for (let i = 1; i < food.length; i++) {
    let count = parseInt(food[i] / 2);
    for (let j = 0; j < count; j++) {
      answer.push(i);
    }
  }

  return answer.join("") + "0" + [...answer].reverse().join("");
}

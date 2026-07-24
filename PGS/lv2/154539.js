//뒤에 있는 큰 수 찾기
//못품

/*시간초과
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    for (let j = i + 1; j <= numbers.length; j++) {
      if (j === numbers.length) {
        answer.push(-1);
      }
      let compareNumber = numbers[j];

      if (compareNumber > currentNumber) {
        answer.push(compareNumber);
        break;
      }
    }
  }
  return answer;
}*/

//모노톤 스택
//뒤에 있는 큰 수 + n이 100만인 경우 사용 => 외우기

function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= numbers[i]) {
      stack.pop();
    }

    if (stack.length) {
      answer[i] = stack[stack.length - 1];
    }

    stack.push(numbers[i]);
  }
  return answer;
}

console.log(solution([9, 1, 5, 3, 6, 2]));

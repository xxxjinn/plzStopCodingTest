// [카카오 인턴] 키패드 누르기

// 내 풀이 -> 문제점: 하드코딩하고 일일히 하나씩 if문을 사용했음
function solution(numbers, hand) {
  let answer = "";

  let [currentLeftY, currentLeftX] = [3, 0];
  let [currentRightY, currentRightX] = [3, 2];

  const calculate = (curLeft, curRight, movePosition) => {
    const calLeft =
      Math.abs(movePosition[0] - curLeft[0]) +
      Math.abs(movePosition[1] - curLeft[1]);
    const calRight =
      Math.abs(movePosition[0] - curRight[0]) +
      Math.abs(movePosition[1] - curRight[1]);

    if (calLeft > calRight) {
      return "R";
    } else if (calLeft < calRight) {
      return "L";
    } else {
      if (hand === "right") {
        return "R";
      } else {
        return "L";
      }
    }
  };

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    let numberPosition = [-1, -1];
    if (number === 1) {
      [currentLeftY, currentLeftX] = [0, 0];
      answer += "L";
    } else if (number === 4) {
      [currentLeftY, currentLeftX] = [1, 0];
      answer += "L";
    } else if (number === 7) {
      [currentLeftY, currentLeftX] = [2, 0];
      answer += "L";
    } else if (number === 3) {
      [currentRightY, currentRightX] = [0, 2];
      answer += "R";
    } else if (number === 6) {
      [currentRightY, currentRightX] = [1, 2];
      answer += "R";
    } else if (number === 9) {
      [currentRightY, currentRightX] = [2, 2];
      answer += "R";
    }

    if (number === 2 || number === 5 || number === 8 || number === 0) {
      if (number === 2) {
        numberPosition = [0, 1];
      } else if (number === 5) {
        numberPosition = [1, 1];
      } else if (number === 8) {
        numberPosition = [2, 1];
      } else if (number === 0) {
        numberPosition = [3, 1];
      }

      let cal = calculate(
        [currentLeftY, currentLeftX],
        [currentRightY, currentRightX],
        numberPosition
      );

      if (cal === "L") {
        [currentLeftY, currentLeftX] = numberPosition;
        answer += "L";
      } else {
        [currentRightY, currentRightX] = numberPosition;
        answer += "R";
      }
    }
  }

  return answer;
}

//다른 풀이 -> Map 사용, Includes로 간결하게 처리

function solution(numbers, hand) {
  let answer = "";

  const positionMap = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  let leftPosition = positionMap["*"];
  let rightPosition = posistionMap["#"];

  const getDistance = (from, to) =>
    Math.abs(from[0] - to[0]) + Math.abs(from[1] - to[1]);

  for (let number of numbers) {
    const position = positionMap[number];

    if ([1, 4, 7].includes(number)) {
      leftPosition = position;
      answer += "L";
    } else if ([3, 6, 9].includes(number)) {
      rightPosition = position;
      answer += "R";
    } else {
      const leftDistance = getDistance(leftPosition, position);
      const rightDistance = getDistance(rightPosition, position);

      if (
        leftDistance < rightDistance ||
        (leftDistance === rightDistance && hand === "left")
      ) {
        leftPosition = position;
        answer += "L";
      } else {
        rightPosition = position;
        answer += "R";
      }
    }
  }

  return answer;
}

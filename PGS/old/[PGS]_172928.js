// 공원 산책

function solution(park, routes) {
  let answer = [];

  let startX = 0;
  let startY = 0;

  park = park.map((v) => v.split(""));

  for (let i = 0; i < park.length; i++) {
    let current = park[i];
    for (let j = 0; j < current.length; j++) {
      if (current[j] === "S") {
        startX = i;
        startY = j;
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    let arr = routes[i].split(" ");
    let op = arr[0];
    let n = parseInt(arr[1]);

    let canMove = true;

    let tempX = startX;
    let tempY = startY;

    while (n > 0) {
      n--;

      if (op === "N") {
        if (tempX - 1 >= 0 && tempX - 1 < park.length) {
          if (park[tempX - 1][tempY] === "X") {
            canMove = false;
            break;
          }
          tempX -= 1;
        } else {
          canMove = false;
          break;
        }
      } else if (op === "S") {
        if (tempX + 1 < park.length) {
          if (park[tempX + 1][tempY] === "X") {
            canMove = false;
            break;
          }
          tempX += 1;
        } else {
          canMove = false;
          break;
        }
      } else if (op === "W") {
        if (tempY - 1 >= 0) {
          if (park[tempX][tempY - 1] === "X") {
            canMove = false;
            break;
          }
          tempY -= 1;
        } else {
          canMove = false;
          break;
        }
      } else if (op === "E") {
        if (tempY + 1 < park[0].length) {
          if (park[tempX][tempY + 1] === "X") {
            canMove = false;
            break;
          }
          tempY += 1;
        } else {
          canMove = false;
          break;
        }
      }
    }

    if (canMove) {
      startX = tempX;
      startY = tempY;
    }
  }

  answer.push(startX);
  answer.push(startY);

  return answer;
}

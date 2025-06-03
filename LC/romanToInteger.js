// 원래 내 풀이
// 하드코딩으로 풀어서 문제가 되었고, if-else문이 너무 복잡하게 보임 => 유지보수에 좋지 않음

var romanToInt = function (s) {
  let sum = 0;
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let curSymbol = s[i];
    let nextSymbol = s[i + 1];

    if (curSymbol === "I") {
      if (nextSymbol === "V") {
        sum += 4;
        i++;
      } else if (nextSymbol === "X") {
        sum += 9;
        i++;
      } else {
        sum += map[curSymbol];
      }
    } else if (curSymbol === "X") {
      if (nextSymbol === "L") {
        sum += 40;
        i++;
      } else if (nextSymbol === "C") {
        sum += 90;
        i++;
      } else {
        sum += map[curSymbol];
      }
    } else if (curSymbol === "C") {
      if (nextSymbol === "D") {
        sum += 400;
        i++;
      } else if (nextSymbol === "M") {
        sum += 900;
        i++;
      } else {
        sum += map[curSymbol];
      }
    } else {
      sum += map[curSymbol];
    }
  }

  return sum;
};

// gpt 풀이

var romanToInt = function (s) {
  let sum = 0;
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let curSymbol = map[s[i]];
    let nextSymbol = map[s[i + 1]];

    if (curSymbol < nextSymbol) {
      sum -= curSymbol;
    } else {
      sum += curSymbol;
    }
  }

  return sum;
};

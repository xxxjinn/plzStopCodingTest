//N개의 최소공배수
//12분 소요

function solution(arr) {
  //최대공약수
  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = a % b;
      a = b;
      b = temp;
    }

    return a;
  };

  //최소공배수
  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  let index = 0;
  let lcmNum = 0;

  while (index < arr.length) {
    if (index === arr.length - 1) break;

    //이 부분이 마음에 안듦...
    let a = arr[index];
    if (lcmNum) a = lcmNum;

    let b = arr[index + 1];

    lcmNum = lcm(a, b);

    index++;
  }
  return lcmNum;
}

console.log(solution([2, 6, 8, 14]));

//gpt 추천
let lcmNum = arr[0];

for (let i = 1; i < arr.length; i++) {
  lcmNum = lcm(lcmNum, arr[i]);
}

return lcmNum;

// 방 번호 - 실5
// 못품

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let roomNumber = fs.readFileSync(path).toString().trim().split("").map(Number);

let count = Array(10).fill(0);

for (let i = 0; i < roomNumber.length; i++) {
  const number = roomNumber[i];
  count[number]++;
}

const sixNine = count[6] + count[9];
count[6] = Math.ceil(sixNine / 2);
count[9] = 0;

console.log(Math.max(...count));

// 세트 문제 => 가장 많이 필요한 것을 기준으로 함

// 실버5~4정도에서는 배열 상태를 실제로 시뮬레이션하지 않기...제발........ 그럼 방향 자체가 틀린거임
// 문제에 접근할 때 구현으로 바로 생각하지 말고 문제를 먼저 해석하고 수학적으로 단순화할 수 있는 방향을 생각하기

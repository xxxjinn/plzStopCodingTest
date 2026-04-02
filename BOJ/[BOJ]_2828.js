//사과 담기 게임 - 실버5
//1시간 소요 - 못풂

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [input, j, ...positions] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

let [n, m] = input.split(" ").map(Number);

let answer = 0;
let prevStart = 1;

for (let i = 0; i < j; i++) {
  const position = +positions[i];
  const right = prevStart + m - 1;

  if (position >= prevStart && position <= right) continue; //바구니 길이보다 작거나 같으면 사과 받음

  //바구니 길이보다 위치가 크면 이동

  //사과가 왼쪽에 있음
  if (position < prevStart) {
    //왼쪽으로 이동
    answer += prevStart - position;
    prevStart = position;
  }

  //사과가 오른쪽에 있음
  else if (position > right) {
    //오른쪽으로 이동
    answer += position - right;
    prevStart += position - right;
  }
}

console.log(answer);

//m칸을 차지하면
//위치-m+1을 하면 바구니 시작 위치가 나옴
//이 아이디어는 생각하긴 했음

//근데 나는 Math.min을 써서 왼쪽이랑 오른쪽중에 더 짧은 곳으로 가려고해서 틀렸음
//사과는 이미 내려와서 바구니의 왼쪽/안/오른쪽에 있는 것이 확정되어있는 것을 생각하지 못함

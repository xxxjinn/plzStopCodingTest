//셀프 넘버 - 실버5
//50분 소요

//내 풀이 => 시간이 무려 2200초나.......
//실버5인데 왜이리 어렵나 했더니 그냥 내가 너무 어렵게 푼거였음ㅠㅠ
let wholeNumber = Array(10000)
  .fill(0)
  .map((_, i) => i + 1);

let hasSelfNumber = new Set();

function d(n) {
  let ntoChar = n.toString().split("").map(Number);
  let res = n + ntoChar.reduce((pre, cur) => pre + cur, 0);

  hasSelfNumber.add(res);
  if (res > 10000) {
    return;
  }
  return d(res); //여기에서 d를 계속 호출하면서 불필요하게 반복하게 됨
}

for (let i = 1; i <= 10000; i++) {
  d(i);
}

for (const value of hasSelfNumber) {
  if (wholeNumber.includes(value)) {
    let idx = wholeNumber.indexOf(value);
    wholeNumber[idx] = "*";
  }
}

wholeNumber = wholeNumber.join("\n").replaceAll("*", "").split("\n");

for (let i = 0; i < wholeNumber.length; i++) {
  if (wholeNumber[i] === "") continue;
  console.log(wholeNumber[i]);
}

//간단한 풀이 => 시간 200초...... 10배나 더 오래걸린거 실화?

let set = new Set();

function d2(n) {
  return (
    n +
    n
      .toString()
      .split("")
      .map(Number)
      .reduce((pre, cur) => pre + cur, 0)
  );
}

for (let i = 1; i <= 10000; i++) {
  let res = d2(i);
  if (res <= 10000) set.add(res);
}

for (let i = 1; i <= 10000; i++) {
  if (!set.has(i)) console.log(i);
}

//내가 고쳐야 할 것 = 쓸데없이 디테일하게 구현하려고 하는 것.. 사고 습관이 이상함;;

//모든 경우를 다 커버해야한다는 강박 버리기
//문제의 본질에 집착하고 구현 디테일은 신경쓰지않기
//깔끔한 코드를 한 번에 내려고 하지 않기 -> 처음부터 완성된 구조를 짜려고 하면 복잡하게 설계를 하게 됨

//개선 방법
//1. 출력해야하는게 뭔지 정리하기
//2. 작은 예시를 손으로 먼저 풀기
//3. 구현 전에 자료구조나 연산의 흐름을 주석으로 써놓기
//후처리 작업이 필요하다면 뭔가 잘못된거....

// 이진 변환 반복하기

//10:7 시작
//11:16 힌트 -> 2진법 변환하는 법: 함수 존재
//11:20 품

//이진변환

function solution(s) {
  let count = 0;
  let zeroCount = 0;
  while (s !== "1") {
    count++;
    //1. s의 모든 0을 제거
    if (s.includes("0")) {
      zeroCount += s.split("").filter((v) => v === "0").length;
      s = s.replaceAll("0", "");
    }
    //2. s의 길이를 c라고 하면, s를 "c를 2진법으로 표현한 문자열"로 바꿈
    const c = s.length;

    /** c를 2진법으로 표현 */
    s = c.toString(2);
  }
  return [count, zeroCount];
}

console.log(solution("1111111"));

//로직은 쉬워서 5분도 안걸렸는데, 2진법 변환을 함수가 있는 줄 모르고 직접 구현하려고 했음..

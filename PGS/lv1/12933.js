//정수 내림차순으로 배치하기
//1분 소요

function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .map(Number)
      .sort((a, b) => b - a)
      .join(""),
  );
}

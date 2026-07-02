//문자열 내 p와 y의 개수
//2분 소요

function solution(s) {
  s = s.toLowerCase();

  let countP = s.filter((v) => v === "p").length;
  let countY = s.filter((v) => v === "y").length;

  if (countP === countY) return true;
  return false;
}

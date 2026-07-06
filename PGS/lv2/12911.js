//다음 큰 숫자
//6분 소요

function solution(n) {
  //n의 다음 큰 숫자 조건들
  //1. n보다 큰 자연수
  //2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같음
  //3. n의 다음 큰 숫자는 1,2를 만족하는 수 중 가장 작은 수

  let bigNum = n + 1;
  while (true) {
    let nOneCount = n
      .toString(2)
      .split("")
      .filter((v) => v === "1").length;
    let bigNumOneCount = bigNum
      .toString(2)
      .split("")
      .filter((v) => v === "1").length;

    if (nOneCount === bigNumOneCount) {
      return bigNum;
    }
    bigNum++;
  }
}

console.log(solution(15));

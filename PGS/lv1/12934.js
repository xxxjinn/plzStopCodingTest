//정수 제곱근 판별
//반례 힌트 보고 15분만에 품

function solution(n) {
  //n이 양의 정수 x의 제곱이라면 x+1의 제곱 리턴

  const sqrt = Math.sqrt(n);

  if (n === sqrt ** 2 && sqrt === parseInt(sqrt)) {
    return (sqrt + 1) ** 2;
  }
  //아니면 -1 리턴

  return -1;
}

console.log(solution(101));

//Number.isInteger(num) -> num이 정수인지 검사

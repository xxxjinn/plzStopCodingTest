// 콜라 문제

function solution(a, b, n) {
  var answer = 0;
  let remain = 0;
  while (n >= a) {
    if (n % a === 0) {
      let receive = (n / a) * b;
      n = n - n + receive;
      answer += receive;
      if (n < a) {
        n += remain;
        remain = 0;
      }
    } else {
      remain += n % a;
      n = n - (n % a);
    }
  }

  return answer;
}

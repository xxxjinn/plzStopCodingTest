//짝지어 제거하기
//힌트보고 품 40분 소요

function solution(s) {
  let index = 0;

  let arr = [];

  if (s.length % 2 !== 0) return 0;

  while (index <= s.length - 1) {
    //문자열이 모두 제거되면 종료

    let char = s[index];

    //같은 알파벳이 2개 붙어있는 짝을 찾음
    if (char === arr[arr.length - 1]) {
      //그 짝을 제거하고, 앞뒤로 문자열을 이어붙임
      arr.pop();
    } else {
      arr.push(char);
    }
    index++;
    //제거되면 1, 아니면 0 리턴
  }

  return arr.length > 0 ? 0 : 1;
}

solution("baabaa");

//처음에 그냥 while문으로 slice하니까 효율성에서 시간초과나서 실패함
//-> 스택으로 풀어야 한다는 힌트를 얻음

//스택으로 푸는지 어떻게 판단할까?
//1.가장 최근 것과 비교하는 경우
//2.뭔가 제거하면 이전 상태를 기억해야 하는 경우

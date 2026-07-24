//전화번호 목록
//힌트 보고 품 - 25분 소요

/*

while(for())라서 10^12

function solution(phone_book) {
  let answer = true;

  phone_book = phone_book.sort((a, b) => a.length - b.length);

  let index = 0;

  while (index < phone_book.length) {
    let current = phone_book[index];

    for (let i = index + 1; i < phone_book.length; i++) {
      let number = phone_book[i];
      if (number.startsWith(current)) {
        return false;
      }
    }

    index++;
  }
  return answer;
}*/

function solution(phone_book) {
  phone_book = phone_book.sort(); //string 사전순 정렬

  //핵심 아이디어: 사전순 정렬을 하면 접두어 후보는 바로 옆에꺼니까 인접한 두 개만 비교하면 됨

  let index = 1;

  while (index < phone_book.length) {
    let current = phone_book[index];
    let pre = phone_book[index - 1];

    if (current.startsWith(pre)) return false;

    index++;
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));

//2021 KAKAO BLIND RECRUITMENT 신규 아이디 추천

function solution(new_id) {
  //1단계: 대문자 -> 소문자로 변경
  new_id = new_id.toLowerCase();

  //2단계: 안되는 문자 모두 제거
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");

  //3단계: 마침표 연속인 부분 하나의 마침표로 치환
  let result = "";
  let prevChar = "";

  for (let i = 0; i < new_id.length; i++) {
    let currentChar = new_id[i];

    if (currentChar === "." && prevChar === ".") continue;

    result += currentChar;
    prevChar = currentChar;
  }
  new_id = result;

  /** 3단계 정규표현식으로 풀기
   * new_id=new_id.replace(/\.{2,}/g,".");
   */

  //4단계: 마침표가 처음이나 끝에 위치하면 제거
  while (new_id[0] === ".") {
    const removeArr = [...new_id];
    removeArr.shift();
    new_id = removeArr.join("");
  }

  while (new_id[new_id.length - 1] === ".") {
    const removeArr = [...new_id];
    removeArr.pop();
    new_id = removeArr.join("");
  }

  //5단계: 빈 문자열이라면 "a"를 대입
  if (new_id.length === 0) new_id = "a";

  //6단계: 길이가 16자 이상이면, 15개의 문자를 제외한 나머지 문자를 제거. 마침표가 끝에 있다면 제거
  while (new_id.length >= 16) {
    const arr = [...new_id];
    arr.pop();
    new_id = arr.join("");
    while (new_id[new_id.length - 1] === ".") {
      const removeArr = [...new_id];
      removeArr.pop();
      new_id = removeArr.join("");
    }
  }

  //7단계: 길이가 2자 이하라면, 마지막문자를 길이가 3이 될때까지 반복해서 끝에 붙임
  while (new_id.length < 3) {
    new_id += new_id[new_id.length - 1];
  }

  return new_id;
}

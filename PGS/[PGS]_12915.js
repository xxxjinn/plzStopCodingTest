// 문자열 내 마음대로 정렬하기

/** localeCompare 메서드 사용 */
function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}

/** 버블 정렬로 풀어보기 */
function solution(strings, n) {
  for (let i = 0; i < strings.length - 1; i++) {
    for (let j = 0; j < strings.length - 1 - i; j++) {
      let str1 = strings[j];
      let str2 = strings[j + 1];

      if (str1[n] > str2[n] || (str1[n] === str2[n] && str1 > str2)) {
        const temp = strings[j];
        strings[j] = strings[j + 1];
        strings[j + 1] = temp;
      }
    }
  }
  return strings;
}

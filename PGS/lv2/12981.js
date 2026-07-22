//영어 끝말잇기
//16분 소요

function solution(n, words) {
  var answer = [0, 0];

  // 1번부터 번호순대로 한사람씩 단어를 말함
  //마지막 사람이 단어를 말하면 1번 사람부터 다시 시작
  //앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 함
  //이전에 등장했던 단어 사용불가
  //한글자인 단어는 인정되지 않음

  //탈락자 발생하지 않으면 [0,0] return

  let word = [];
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    if (
      word.includes(currentWord) ||
      (word.length >= 1 &&
        word[i - 1][word[i - 1].length - 1] !== currentWord[0]) ||
      currentWord.length < 2
    ) {
      let number = Math.floor(i % n) + 1;
      let count = Math.floor(i / n) + 1;
      answer[0] = number;
      answer[1] = count;

      break;
    }

    word.push(currentWord);
  }

  return answer;
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ]),
);

//리팩토링
function sol(n, words) {
  const used = new Set(); //includes 대신 set.has를 사용하면 O(1)

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (
      word.length < 2 ||
      used.has(word) ||
      (i > 0 && words[i - 1][words[i - 1].length - 1] !== word[0])
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    used.add(word);
  }

  return [0, 0];
}

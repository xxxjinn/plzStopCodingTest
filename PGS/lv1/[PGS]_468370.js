//중요한 단어를 스포방지

//2시간 소요 - 못품

const message =
  "my phone number is 01012345678 and may i have your phone number";

const spoiler_ranges = [
  [5, 5],
  [25, 28],
  [34, 40],
  [53, 59],
];

function solution(message, spoiler_ranges) {
  let answer = 0;

  let wordState = [];

  let i = 0;
  let str = "";

  let start = 0;

  while (i <= message.length) {
    let char = message[i];

    if (char === " " || i === message.length) {
      wordState.push({ word: str, start: start, end: i - 1 });
      str = "";
      i++;
      start = i;
      continue;
    }
    str += char;
    i++;
  }

  /* 조건 2,3번에서 해결되지 않음
  let importantWords = [];

  for (let i = 0; i < spoiler_ranges.length; i++) {
    const [rangeStart, rangeEnd] = spoiler_ranges[i];

    for (let j = 0; j < wordState.length; j++) {
      if (wordState[j].end >= rangeStart && wordState[j].start <= rangeEnd) {
        importantWords.push(wordState[j].word);
      }
    }
  }

  const words = wordState.map((v) => v.word);

  for (let i = 0; i < importantWords.length; i++) {
    const wordCount = words.filter((v) => v === importantWords[i]).length;

    const importantCount = importantWords.filter(
      (v) => v === importantWords[i],
    ).length;

    if (importantCount > 1 || wordCount > 1) {
      importantWords = importantWords.filter((v) => v !== importantWords[i]);
    }
  }*/

  /*
  let index = 0;

  let importantWords = [];

  //스포 방지 범위 반복문


  while (index < spoiler_ranges.length) {
    let [rangeStart, rangeEnd] = spoiler_ranges[index];

     내가 풀었던 것: 원래 문장을 점점 가리고 있음
  message =
      message.slice(0, rangeStart) +
      "*".repeat(rangeEnd - rangeStart + 1) +
      message.slice(rangeEnd + 1, message.length);

    //힌트: 가려진 문장을 점점 공개하는 것

    //문자열을 조작하지 말고, 단어들을 관리하기

    index++;
  }
  */

  let normalWords = new Set();

  for (let i = 0; i < wordState.length; i++) {
    let isSpoiler = false;

    for (let j = 0; j < spoiler_ranges.length; j++) {
      const [rangeStart, rangeEnd] = spoiler_ranges[j];

      if (wordState[i].end >= rangeStart && wordState[i].start <= rangeEnd) {
        isSpoiler = true;
        break;
      }
    }

    if (!isSpoiler) {
      normalWords.add(wordState[i].word);
    }
  }

  let opened = new Set();

  for (let i = 0; i < spoiler_ranges.length; i++) {
    const [rangeStart, rangeEnd] = spoiler_ranges[i];

    for (let j = 0; j < wordState.length; j++) {
      if (wordState[j].end >= rangeStart && wordState[j].start <= rangeEnd) {
        if (normalWords.has(wordState[j].word)) continue;
        if (opened.has(wordState[j].word)) continue;

        answer++;
        opened.add(wordState[j].word);
      }
    }
  }

  return answer;
}

// 왼쪽 -> 오른쪽 순서로 스포 방지 구간을 하나씩 클릭해 공개되는 단어들 중 "중요한 단어"가 몇 개인지 확인

//단어는 공백으로 구분되며, 알파벳 소문자와 숫자로만 구성된 문자열

//단어 내 일부 문자에만 스포일러 방지 기능이 적용되더라도, 해당 단어 전체를 스포방지단어로 간주

//한 단어가 여러 개의 스포 방지 구간에 걸쳐있을 수 있음
//하나의 스포 방지 구간에 여러 단어가 포함될 수 있음

//중요한단어 조건
//1) 스포 방지 단어
//2) 스포 방지 구간이 아닌 구간에 등장한 적이 없어야 함
//3) 이전에 공개된 스포 방지 단어와 중복되지 않아야 함
//4) 여러 단어가 동시에 공개된 경우, 왼쪽부터 순서대로 하나씩 중요한 단어인지 판단

console.log(solution(message, spoiler_ranges));

// 정리

function solution(message, spoiler_ranges) {
  //단어 , 시작, 끝 위치 저장
  const wordState = [];

  let str = "";
  let start = 0;

  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === " ") {
      wordState.push({
        word: str,
        start,
        end: i - 1,
      });

      str = "";
      start = i + 1;
    } else {
      str += message[i];
    }
  }

  //스포가 없는 단어들
  const normalWords = new Set();

  for (const word of wordState) {
    let isSpoiler = false;

    for (const [rangeStart, rangeEnd] of spoiler_ranges) {
      //단어랑 스포 구간이 겹치나요?
      if (word.end >= rangeStart && word.start <= rangeEnd) {
        isSpoiler = true;
        break;
      }
    }

    if (!isSpoiler) {
      normalWords.add(word.word);
    }
  }

  //중요한 단어로 인정된 단어
  const opened = new Set();

  for (const [rangeStart, rangeEnd] of spoiler_ranges) {
    for (const word of wordState) {
      //스포일러와 안겹치면 넘어감
      if (word.end < rangeStart || word.start > rangeEnd) {
        continue;
      }

      //스포일러 단어가 아닌 단어로 등장한 적 있으면 제외
      if (normalWords.has(word.word)) {
        continue;
      }

      //중요한 단어에 이미 들어있으면 제외
      if (opened.has(word.word)) {
        continue;
      }

      opened.add(word.word);
    }
  }

  return opened.size;
}

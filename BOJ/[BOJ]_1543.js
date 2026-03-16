//문서 검색 - 실5
//30분 소요 (테케는 다 맞았는데 틀렸다고 해서 gpt한테 예외 받음)

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [document, word] = fs.readFileSync(path).toString().trim().split("\n");

let answer = 0;

/*
let string = "";
for (let i = 0; i < document.length; i++) {
  let char = document[i];
  string += char;

  if (string.length === word.length) {
    if (string === word) {
      answer++;
    }
    string = "";
  }
}*/

for (let i = 0; i < document.length; i++) {
  let string = "";
  let startChar = document[i];

  string += startChar;

  if (word.length === 1 && string === word) {
    //word가 1일때를 생각 못함
    answer++;
    continue;
  }

  for (let j = i + 1; j < document.length; j++) {
    let nextChar = document[j];
    string += nextChar;

    if (string === word) {
      answer++;

      i += word.length - 1;
      break;
    }
  }
}

//gpt 코드
//document.length-word.length => 이걸 하면 쓸데없는 비교 안해도 됨
for (let i = 0; i <= document.length - word.length; i++) {
  if (document.slice(i, i + word.length) === word) {
    answer++;
    i += word.length;
  } else {
    i++;
  }
}

console.log(answer);

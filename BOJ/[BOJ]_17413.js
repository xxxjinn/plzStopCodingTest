// 단어 뒤집기 2 - 실버3
// 1시간 소요
//풀었음

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim();

let result = "";
let isTagOpen = false;
let isWordEnd = false;
let word = "";

for (let i = 0; i < input.length; i++) {
  const char = input[i];
  const nextChar = input[i + 1];

  if (char === "<") {
    isTagOpen = true;
    result += char;
    continue;
  } else if (char === ">") {
    isTagOpen = false;
    result += char;
    continue;
  }

  if (isTagOpen) {
    result += char;
  } else {
    if (nextChar === " " || nextChar === "<") {
      isWordEnd = true;
      word += char;
    } else {
      if (char === " ") {
        result += char;
        continue;
      }
      word += char;
    }

    if (isWordEnd || i === input.length - 1) {
      result += word.split("").reverse().join("");
      word = "";
      isWordEnd = false;
    }
  }
}

console.log(result);

//개선 (isWordEnd 불필요) -> 실제로 이거때문에 시간을 많이 소요했음

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char === "<") {
    if (word.length > 0) {
      result += word.split("").reverse().join("");
      word = "";
    }
    isTagOpen = true;
    result += char;
  } else if (char === ">") {
    isTagOpen = false;
    result += char;
  } else if (isTagOpen) {
    result += char;
  } else {
    if (char === " ") {
      result += word.split("").reverse().join("") + " ";
      word = "";
    } else {
      word += char;
    }
  }
}

console.log(result);

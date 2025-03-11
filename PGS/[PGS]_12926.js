//시저암호

function solution(s, n) {
  let answer = "";

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const isUpperCase = (char) => {
    return /^[A-Z]+$/.test(char);
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!isUpperCase(char)) {
      let index = alphabet.indexOf(char);
      if (char === " ") answer += " ";
      else answer += alphabet[(index + n) % alphabet.length];
    } else {
      let index = alphabet.indexOf(char.toLowerCase());
      if (char === " ") answer += " ";
      else answer += alphabet[(index + n) % alphabet.length].toUpperCase();
    }
  }

  return answer;
}

//둘만의 암호

function solution(s, skip, index) {
  let answer = "";

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newAlphabet = alphabet;

  for (let j = 0; j < skip.length; j++) {
    newAlphabet = newAlphabet.replace(skip[j], "*");
  }
  newAlphabet = newAlphabet.split("").filter((v) => v != "*");

  for (let i = 0; i < s.length; i++) {
    let charIndex = newAlphabet.indexOf(s[i]);
    answer += newAlphabet[(charIndex + index) % newAlphabet.length];
  }

  return answer;
}

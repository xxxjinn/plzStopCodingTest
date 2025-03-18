// 옹알이(2)

function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    let current = ""; //같은 단어가 연속하는 지를 잡기 위한 변수
    let i = 0;
    let isValid = true;

    while (i < word.length) {
      let matched = false; //발음할 수 있는지의 여부를 알기 위한 변수

      for (let sound of arr) {
        if (word.startsWith(sound, i)) {
          //i번째부터 해당 단어로 시작하는지 확인하는 메서드
          if (current === sound) {
            isValid = false;
            break;
          }

          current = sound;
          i += sound.length;
          matched = true;
          break;
        }
      }
      if (!matched) {
        isValid = false;
        break;
      }
      if (!isValid) break;
    }
    if (isValid) count++;
  }
  return count;
}

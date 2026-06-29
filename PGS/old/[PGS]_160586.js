// 대충 만든 자판

function solution(keymap, targets) {
  let answer = [];

  for (let i = 0; i < targets.length; i++) {
    let target = targets[i];
    let count = 0;
    let flag = false;

    for (let j = 0; j < target.length; j++) {
      let char = target[j];
      let minPress = Infinity;

      for (let k = 0; k < keymap.length; k++) {
        let currentIndex = keymap[k].indexOf(char);
        if (currentIndex !== -1) {
          minPress = Math.min(minPress, currentIndex + 1);
        }
      }

      if (minPress !== Infinity) {
        count += minPress;
      } else {
        flag = true;
        break;
      }
    }
    answer.push(flag ? -1 : count);
  }
  return answer;
}

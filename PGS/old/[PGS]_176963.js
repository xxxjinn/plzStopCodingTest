// 추억 점수

function solution(name, yearning, photo) {
  let answer = [];
  let map = {};

  for (let i = 0; i < name.length; i++) {
    map[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let curPhoto = photo[i];
    let count = 0;
    for (let j = 0; j < curPhoto.length; j++) {
      let person = curPhoto[j];
      if (person in map) count += map[person];
    }
    answer.push(count);
  }
  return answer;
}

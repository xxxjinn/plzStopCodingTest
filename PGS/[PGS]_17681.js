//2018 KAKAO BLIND RECRUITMENT [1차] 비밀지도

function solution(n, arr1, arr2) {
  let answer = Array(n).fill("");

  let makeMap = (arr) => {
    let returnArr = [];
    for (let i = 0; i < n; i++) {
      let value = arr[i].toString(2);
      while (value.length < n) {
        value = "0" + value;
      }
      value = value.replaceAll("0", " ").replaceAll("1", "#");
      returnArr.push(value);
    }
    return returnArr;
  };

  let arr1Map = makeMap(arr1);
  let arr2Map = makeMap(arr2);

  for (let i = 0; i < n; i++) {
    let arr1Str = arr1Map[i];
    let arr2Str = arr2Map[i];
    let answerValue = answer[i];
    for (let j = 0; j < n; j++) {
      if (arr1Str[j] === " " && arr2Str[j] === " ") answerValue += " ";
      else answerValue += "#";
    }
    answer[i] = answerValue;
  }
  return answer;
}

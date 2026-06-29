// 소수 만들기

function solution(nums) {
  let arr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let fir = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      let sec = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        let thr = nums[k];
        let sum = fir + sec + thr;
        arr.push(sum);
      }
    }
  }

  let answer = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    for (let j = 2; j < value; j++) {
      if (value % j === 0) {
        answer--;
        break;
      }
    }
  }

  return answer;
}

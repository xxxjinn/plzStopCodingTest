// 폰켓몬

function solution(nums) {
  let answer = 0;
  let set = new Set(nums);
  let canGetNumber = nums.length / 2;

  return (answer = canGetNumber >= set.size ? set.size : canGetNumber);
}

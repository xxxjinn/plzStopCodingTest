//시간복잡도 최악 O(n^2)

var twoSum = function (nums, target) {
  let firstNumberIndex = 0;
  let secondNumberIndex = -1;
  let count = 0;
  while (true) {
    let firstNumber = nums.shift();
    let flag = false;
    count++;
    for (let i = 0; i < nums.length; i++) {
      let secondNumber = nums[i];
      if (firstNumber + secondNumber === target) {
        secondNumberIndex = i + count;
        flag = true;
        break;
      }
    }
    if (flag) break;
    firstNumberIndex++;
  }
  return [firstNumberIndex, secondNumberIndex];
};

//map 사용 O(1)

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let calculate = target - nums[i];

    if (map.has(calculate)) {
      return [map.get(calculate), i];
    }

    map.set(nums[i], i);
  }
};

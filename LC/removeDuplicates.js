var removeDuplicates = function (nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return nums.length === 0 ? 0 : i + 1;
};

console.log(removeDuplicates([1, 1, 2]));

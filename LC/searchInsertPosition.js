//내 풀이

var searchInsert = function (nums, target) {
  let stack = [];
  let count = nums.length - 1;

  for (let i = count; i >= 0; i--) {
    let num = nums[i];

    if (num > target) {
      stack.push(nums.pop());
    } else if (num < target) {
      nums.push(target);
      break;
    } else {
      return i;
    }
  }

  console.log(nums);
  if (nums.length === 0) {
    nums.push(target);
  }

  if (stack.length > 0) {
    for (let i = stack.length - 1; i >= 0; i--) {
      nums.push(stack[i]);
    }
  }

  return nums;
};

searchInsert([1, 3, 5, 6], 0);

//이진 탐색 -> O(log n)
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

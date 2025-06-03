var isPalindrome = function (x) {
  let prevX = x;
  let reversedX = +x.toString().split("").reverse().join("");
  return prevX === reversedX ? true : false;
};

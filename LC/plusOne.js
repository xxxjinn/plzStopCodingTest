var plusOne = function (digits) {
  let index = digits.length - 1;
  digits[index] += 1;

  while (index >= 0) {
    if (digits[index] === 10) {
      digits[index] = 0;
      index--;
      digits[index] += 1;
    } else break;
  }

  if (digits.filter((v) => v === 0).length === digits.length) digits.unshift(1);

  return digits;
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);

// js number type => 최대 16자리까지만 표현 가능

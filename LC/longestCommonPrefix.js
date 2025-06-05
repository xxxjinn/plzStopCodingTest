var longestCommonPrefix = function (strs) {
  let answer = "";
  let firstWord = strs.sort((a, b) => a.length - b.length).shift();

  for (let i = firstWord.length; i > 0; i--) {
    let slicedFirstWord = firstWord.slice(0, i);
    let flag = true;

    for (let j = 0; j < strs.length; j++) {
      const curStr = strs[j];
      if (!curStr.includes(slicedFirstWord)) flag = false;
    }

    if (flag) {
      answer = slicedFirstWord;
      break;
    }
  }

  return answer;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

//타겟 넘버
//dfs 연습용
//못품

function solution(numbers, target) {
  let answer = 0;

  const dfs = (index, sum) => {
    //종료
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum - numbers[index]);
    dfs(index + 1, sum + numbers[index]);
  };

  dfs(0, 0);

  return answer;
}

console.log(solution([4, 1, 2, 1], 4));

//순서를 바꾸는 문제 => for문이 있는 dfs
//순서는 고정인데 선택지만 있는 문제 => for문 없는 dfs

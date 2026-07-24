//피로도
//못품: dfs인데 dfs를 까먹음..

/*
내 접근법: 너무 구현이 복잡해짐
function solution(k, dungeons) {
  let answer = dungeons.length;

  if (dungeons.length === 1 && k < dungeons[0][0]) {
    return 0;
  }

  for (let i = 0; i < dungeons.length; i++) {
    let [startMin, startConsum] = dungeons[i];
    console.log("--------------i:", i);

    let count = 1;

    if (k >= startMin) {
      k -= startConsum;
    }

    let indexArr = [];
    for (let j = 0; j < dungeons.length; j++) {
      if (j !== i) indexArr.push(j);
    }
    console.log(indexArr);
  }
  return answer;
}*/

function solution(k, dungeons) {
  let answer = 0;
  let visited = new Array(dungeons.length).fill(false);

  const dfs = (current, count) => {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [min, consum] = dungeons[i];

      if (visited[i] || current < min) continue;

      visited[i] = true;
      dfs(current - consum, count + 1);
      visited[i] = false;
    }
  };

  dfs(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ]),
);

//[1,2,3]의 모든 순열 출력하기 (배열의 숫자가 모두 다른 경우) dfs

/*function pm(arr) {
  const dfs = (visited) => {
    if (visited.length === arr.length) {
      console.log(visited);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited.includes(arr[i])) continue;

      visited.push(arr[i]);
      dfs(visited);
      visited.pop();
    }
  };

  dfs([]);
}

pm([1, 2, 3]);*/

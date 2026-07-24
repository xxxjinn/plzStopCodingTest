//게임 맵 최단거리
//못품 - dfs/bfs인지 구분 못함

/*문제가 만약 모든 경우의 수를 탐색하는 것이라면 dfs
function solution(maps) {
  let answer = 0;

  let visited = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(false),
  );

  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];

  const dfs = (x, y) => {

    //종료
    if (x === maps.length - 1 && y === maps[0].length - 1){
      answer++;
      return;
    }
    
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

     //범위 밖
     if(nx<0 || nx >= maps.length || ny<0 || ny >= maps[0].length) continue;

     if(maps[nx][ny]===0) continue;

     if(visited[nx][ny]) continue;

     dfs(nx, ny);
    }
    
    visited[x][y]= false;
  };

  dfs(0, 0);

  return answer;
}*/

/** 구분법 */
// 몇 개의 영역인가? -> dfs/bfs 둘 다 가능
// 모든 경우의 수 탐색 -> dfs
//최단거리 -> bfs

//bfs는 거리가 같은 칸을 전부 방문한 뒤에 다음 거리로 넘어감 => 처음 도착한 순간이 무조건 최단거리

//bfs는 queue를 활용함

function solution(maps) {
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];

  let visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false),
  );

  function bfs(x, y, dist) {
    let queue = [];

    queue.push([x, y, dist]);
    visited[x][y] = true;

    while (queue.length > 0) {
      const [x, y, dist] = queue.shift();

      if (x === maps.length - 1 && y === maps[0].length - 1) return dist;

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || nx > maps.length - 1 || ny < 0 || ny > maps[0].length - 1)
          continue;

        if (visited[nx][ny]) continue;

        if (maps[nx][ny] === 0) continue;

        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
    return -1;
  }

  return bfs(0, 0, 1);
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]),
);

//섬의 개수 - 실2
//dfs 연습용(다른문제 dfs 풀이 본 후 품)
//1시간 50분 소요 (로직은 거의 다 맞았는데 인덱스 꼬임때문에 마지막에 gpt한테 힌트)

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let dx = [0, 0, -1, 1, -1, 1, -1, 1];
let dy = [-1, 1, 0, 0, 1, -1, -1, 1];

for (let i = 0; i < input.length - 1; i++) {
  let [w, h] = input[i].split(" ").map(Number);

  //input 정제
  /** 이 방식 대신 while로 했다면 더 깔끔할 수 있었음 */
  if (w !== 0 && h !== 0 && input[i].split(" ").length === 2) {
    let visited = Array.from({ length: h }, () => Array(w).fill(false));

    //1칸일 때 처리
    if (w === 1 && h === 1) {
      if (input[i + 1] === "0") {
        console.log(0);
      } else {
        console.log(1);
      }
      continue;
    }

    let map = [];

    for (let j = i + 1; j <= i + h; j++) {
      let num = input[j].split(" ").map(Number);
      map.push(num);
    }

    const dfs = (x, y) => {
      if (visited[y][x] || map[y][x] === 0) {
        return;
      }

      visited[y][x] = true;

      for (let i = 0; i < 8; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[ny][nx]) {
          dfs(nx, ny);
        }
      }
    };

    let island = 0;

    for (let k = 0; k < map.length; k++) {
      for (let l = 0; l < w; l++) {
        if (!visited[k][l] && map[k][l] === 1) {
          dfs(l, k);
          island++;
        }
      }
    }

    console.log(island);
  }
}

//x,y 좌표 헷갈리지 말 것
//조건 제대로 생각해보기. (1일때만 연결되기)

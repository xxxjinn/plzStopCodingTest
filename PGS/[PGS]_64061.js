// 2019 카카오 개발자 겨울 인턴십 크레인 인형뽑기 게임

function solution(board, moves) {
  let bucket = [];
  let answer = [];
  moves = moves.map((v) => v - 1);

  const sameTwo = (arr) => {
    if (
      arr[arr.length - 2] !== undefined &&
      arr[arr.length - 2] === arr[arr.length - 1]
    ) {
      answer.push(arr.pop());
      answer.push(arr.pop());
    }
  };

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];

    for (let j = 0; j < board.length; j++) {
      let current = board[j][move];
      if (current !== 0) {
        bucket.push(board[j][move]);
        board[j][move] = 0;
        break;
      }
    }
    sameTwo(bucket);
  }

  return answer.length;
}

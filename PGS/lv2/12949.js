//행렬의 곱셈
//못품 - 80분 소요

//행렬 안배워서 곱셈 모름...
//처음에 찾아보고 시작

//e.g. 3x3, 2x2짜리가 있음
//세로*가로 -> 3*2 2*2가 나오는데
//여기에서 바깥쪽꺼만 살리면 정답 행렬의 크기가 나옴
//-> 3(*2 2*)2 => 정답 행렬: 3*2
//실제 행렬에서 괄호 안의 숫자가 동일해야지 계산 가능

//행렬곱셈 공식: 왼가오세
//=> 왼쪽꺼 가로*오른쪽꺼 세로
function solution(arr1, arr2) {
  //배열 만드는 것 주의
  let answer = Array.from({ length: arr1.length }, () => []);

  //내가 했던 틀린 방식
  //Array.from({length:arr1.length}).fill([]) => 모든 행이 같은 배열을 참조하게 됨

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        //일반화를 생각해내지 못해서 힌트 찾음
        sum += arr1[i][k] * arr2[k][j];
      }
      answer[i][j] = sum;
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ],
  ),
);

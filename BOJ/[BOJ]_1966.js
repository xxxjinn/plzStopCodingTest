//프린터 큐 - 실버3
//110분 소요
//못풀었음

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [number, ...input] = fs.readFileSync(path).toString().split("\n");

//프린터기 조건
//현재 큐의 가장 앞에 있는 문서의 중요도 확인
//나머지 문서 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면, 이 문서를 인쇄하지 않고 큐의 가장 뒤에 재배치
//나머지 문서 중 현재 문서보다 중요도가 높은 문서가 하나도 없다면 현재 문서를 바로 인쇄

//어떤 문서가 몇 번째로 인쇄되는지 return

let result = [];

let documentArr = [];
let importanceArr = [];

for (let i = 0; i < number * 2; i += 2) {
  let [documentsNumber, documentPosition] = input[i]
    .split(" ")
    .map((v) => Number(v));
  documentArr.push([documentsNumber, documentPosition]);
}

for (let i = 1; i < number * 2; i += 2) {
  importanceArr.push(input[i].split(" ").map((v) => Number(v)));
}

/*for (let i = 0; i < number; i++) {
  console.log("-----------", i);
  let [documentsNumber, documentPosition] = documentArr[i];
  if (documentsNumber === 1) {
    result.push(1);
    continue;
  }
  let importanceObject = [];
  for (let j = 0; j < documentsNumber; j++) {
    importanceObject.push([j, importanceArr[i][j]]);
  }

  for (let j = 0; j < documentsNumber; j++) {
    console.log("j:", j);
    if (importanceObject[j + 1]) {
      let currentImportance = importanceObject[0][1];
      let nextIndex = j + 1;
      let nextImportance = importanceObject[nextIndex][1];

      if (currentImportance < nextImportance) {
        while (currentImportance < nextImportance) {
          [importanceObject[j], importanceObject[nextIndex]] = [
            importanceObject[nextIndex],
            importanceObject[j],
          ];
          nextIndex++;
          if (nextIndex >= documentsNumber) break;
          nextImportance = importanceObject[nextIndex][1];
          console.log("바꾼결과", importanceObject);
        }
      } else if (currentImportance === nextImportance) {
        importanceObject.push(importanceObject.shift());
      }

      if (importanceObject[0][1] === Math.max(...importanceArr[j])) {
        break;
      }
      console.log("결과", importanceObject);
    }
  }
}
*/
//=> 내가 짠 코드는 큐가 아니라 정렬같이 동작시키려고 해서 너무 복잡해짐.
//그냥 맨 앞에 있는게 밀려야하는게 그렇게 되지 않음.

//gpt 코드
for (let i = 0; i < number; i++) {
  let [_, documentPosition] = documentArr[i];
  let queue = importanceArr[i].map((priority, idx) => [idx, priority]);

  let count = 0;
  console.log("queue:", queue);
  while (true) {
    let current = queue.shift();
    let hasHigher = queue.some((doc) => doc[1] > current[1]);

    if (hasHigher) {
      //더 큰 중요도가 없으면 그대로 출력
      queue.push(current);
    } else {
      count++;
      if (current[0] === documentPosition) {
        result.push(count);
        break;
      }
    }
  }
}

console.log(result.join("\n"));

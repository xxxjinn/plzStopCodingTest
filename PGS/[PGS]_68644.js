//두 개 뽑아서 더하기

function solution(numbers) {
    let answer=[];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=1; j<numbers.length; j++){
            let sum=numbers[i]+numbers[j];
            if(i<j && !answer.includes(sum)) answer.push(sum);
        }
    }

    return answer.sort((a,b)=>a-b);
}

//set을 이용해서도 풀 수 있을 듯
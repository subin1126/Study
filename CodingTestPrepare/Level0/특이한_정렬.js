function solution(numlist, n){
    let arr = [];
    let temp = 0;
    for(let i = 0; i<numlist.length; i++){
        temp = Math.abs(numlist[i] - numlist[n-1]);

        if(temp > Math.abs(numlist[i] - numlist[n-1])){
            
        }
    }

    return temp;
}

console.log(solution([1,2,3,4,5,6], 4));
// function solution(array){

//     let arr = array.sort((a,b) => a-b);

//     return arr[Math.floor(arr.length/2)];
// }

const solution = (array) => 
    array
        .sort((a, b) => a - b)
        .at(Math.floor(array.length / 2));

//at : 배열의 특정 인덱스에 위치한 요소를 반환하는 역할

console.log(solution([9,-1,0]));
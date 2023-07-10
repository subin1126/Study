// function solution(start, end){
//   let arr = [];

//   for(let i =start; i<end+1; i++){
//     arr.push(i);
//   }

//   return arr;

// }

function solution(start, end) {
    let arr = [];
    for(let i = start; i > end-1; i--){
        arr.push(i);
    }
    return arr;
}
console.log(solution(10, 3));
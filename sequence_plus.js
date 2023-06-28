// var ret = [];
// var count = 0;
// function solution(a, d, included) {
//     for (let i = 1; i <= included.length ; i++) {
//         ret.push(a+(d*(i-1)));
//     }
//     for(let j = 0; j<=ret.length-1; j++){
//         if(included[j] === true){
//             count+= ret[j];
//         }
//     }
//     return count;
    
// }

// function solution(a, d, included) {
//     return included.reduce((acc, flag, i) => {
//         return flag ? acc + a + d * i : acc
//         //true일경우 해당 등차수열 더하고 acc가 누적값이니까,,,, : 아니면 그냥 누적된값 반환 미친,,,
//     }, 0)
// }

// function solution(a, d, included) {
//     return Array(included.length)
//     .fill(a)
//     .map((x, idx) => x+idx*d)
//     .map((x, idx) => included[idx] ? x : 0)
//     .reduce((a, b) => a+b);
// }

// function solution(a, d, included) {
//     let answer = a;
//     let value = 0;

//     included.forEach((bool) => {
//       if (bool) {
//         value += answer;
//       }
//       answer += d;
//     });
//     return value;
// }

// function solution(a, d, included) {
//     let answer = 0;

//     included.map((v) => {
//         if(v) answer += a;
//         a += d;
//     })
// }

function solution(a, d, included) {
    var answer = 0;
    included.filter((x,i) => {
       if(x){
           answer += a + (d*i)
       } 
    });
    return answer;
}


console.log(solution(3,4,[true, false, false, true, true]));


//등차수열의 합 구현
// var answer = 0;
// function plus(a, d){
//     for(let i = 1; i<=d+1; i++){
//         answer = (i*((2*a)+((i-1)*d)))/2;
        
//     }
//     return answer;
// }
//console.log(plus(7,1));
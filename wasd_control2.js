// var ret = '';
// function solution(numLog){
//     for(let i = 0; i<=numLog.length-1; i++){
//         if((numLog[i+1]-numLog[i]) === 1 ){
//             ret += "w";
//         } else if((numLog[i+1]-numLog[i]) === -1){
//             ret += "s";
//         } else if((numLog[i+1]-numLog[i]) === 10){
//             ret += "d";
//         } else if((numLog[i+1]-numLog[i]) === -10){
//             ret += "a";
//         }
//     }
//     return ret;
// }

// const differences = {
//     '1': 'w',
//     '-1': 's',
//     '10': 'd',
//     '-10': 'a',
//   };
  
//   function solution(numLog) {
//     return numLog.reduce(
//       (result, curr, i) => (i === 0 ? result : result + differences[curr - numLog[i - 1]]),
//       '',
//     );
//   }

function solution(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => { //첫번째 요소 numLog[0] 제외 map
        console.log(v, i);
        //현재요소 v, 이전 요소 numLog[i]의 차
        return convert[v - numLog[i]]
    }).join('')
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
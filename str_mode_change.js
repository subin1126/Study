// function solution(code) {
//     let mode = 0;
//     let ret = "";
//     for (let i = 0; i <= code.length - 1; i++) {
//         if (mode === 0) {
//             if (code[i] != '1') {
//                 if ((i % 2) === 0) {
//                     ret += code[i];
//                 }
//             } else if (code[i] === '1') {
//                 mode = 1;
//             } 
//         } else if (mode === 1) {
//             if (code[i] != '1') {
//                 if ((i % 2) === 1) {
//                     ret += code[i];
//                 }
//             } else if (code[i] === '1') {
//                 mode = 0;
//             }
//         }
//     }
//     if(ret === ''){
//         return "EMPTY";
//     }
//     return ret;
    
// }

// function solution(code) {
//     let answer = '';
//     let mode = 0;

//     for (let i = 0; i < code.length; i += 1) {
//       if (Number(code[i]) === 1) {
//         mode = mode === 1 ? 0 : 1;
//         console.log(mode);
//       }
//       if (Number(code[i]) !== 1 && i % 2 === mode) {
//         answer += code[i];
//         console.log(answer);
//       }
//     }
//     return answer.length > 0 ? answer : 'EMPTY';
// }

// function solution(code) {
//     let odd = false
//     return Array.from(code).reduce((acc, v, i) => {
//         if (v === '1') {
//             odd = !odd
//             return acc
//         }
//         return (i % 2 === (odd ? 1 : 0)) ? acc + v : acc
//     }, '') || 'EMPTY'
// }

// function solution(code) {
//     let mode = 0
//     return [...code].reduce((acc, cur, idx) => {
//         if(mode) {
//             if(cur !== '1' && idx%2 === 1)  return acc+cur
//             if(cur === '1') mode = 0
//         } else {
//             if(cur !== '1' && idx%2 === 0)  return acc+cur
//             if(cur === '1') mode = 1
//         }
            
//         return acc
//     }, "") || "EMPTY"
// }

// function solution(code) {
//     let answer = '';
//     let mode = false;

//     code.split('').forEach((x,i) => {
//         if(x == 1){
//             mode = !mode;
//         }
//         if(x.match('[\a-z\]')){
//             if(!mode){
//                 answer += i%2 == 0 ? x : '';
//             }else{
//                 answer += i%2 == 1 ? x : '';
//             }
//         }
//     });

//     return answer.length > 0 ? answer : "EMPTY";
// }

// function solution(code) {
//     let ret = '';
//     let mode = 0;
//     [...code].forEach((char, i) => {
//       if (char === '1') {
//         mode = Math.abs(mode - 1);
//         return;
//       }
//       ret += i % 2 === mode ? char : '';
//     });
  
//     return ret.length === 0 ? 'EMPTY' : ret;
//   }

function solution(code) {
    let ans ='';
    let m = true;
    [...code].forEach((v,i)=>v==1?m=!m:ans+=!(i%2)==m?v:'')
    return ans||'EMPTY'
}

console.log(solution("abc1abc1abc")); // "acbac"
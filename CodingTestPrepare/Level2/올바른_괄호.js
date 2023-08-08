//문제만 푼 것
// function solution(s){
//     const stack = [];
    
//     for(let i = 0; i<s.length; i++){
//         const char = s[i];
        
//         if(char === '('){
//             stack.push(char);
//         } else if(stack.length === 0){
//             return false;
//         } else {
//             stack.pop();
//         }
//     }
    
//     return stack.length === 0;
    
// }

// function solution(s){
//     let count = 0;
    
//     for(let i = 0 ; i<s.length; i++){
//         const char = s[i];
        
//         if(char === '('){
//             count++;
//         } else {
//             if(count === 0){
//                 return false;
//             }
//             count--;
//         }
//     }
//     return count === 0;
// }



//효율성 통과된 것
// function solution(s){
//     let stackCount = 0;
//     for (let i = 0; i < s.length; i++) {
//         stackCount += s[i] === '(' ? 1 : -1;
//         if (stackCount < 0) return false;
//     }
//     return stackCount === 0 ? true : false;
// }

function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12909


console.log(solution('()()'));
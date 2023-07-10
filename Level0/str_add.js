//문자열 정수의 합
// function solution(num_str) {
//     let ret = 0;
    
//     for(let i =0; i<num_str.length; i++){
//         ret += Number(num_str.charAt(i));
//     }
//     return ret;
// }

// function solution(num_str) {
//     var answer = 0;

//     num_str.split("").map((a)=>answer+=Number(a))

//     return answer;
// }

//마지막 0은 초기값임
const solution = num_str => [...num_str].reduce((acc, curr) => acc + Number(curr), 0)

console.log(solution('123456789'));
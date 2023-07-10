// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = [line];
// }).on('close',function(){
//     str = input[0];
//     var b = '';
//     for(let i = 0; i<=str.length; i++){
//         b = str.charAt(i);
//         console.log(b);
//     }

// });

//문자열의 뒤의 n글자

// function solution(my_string, n) {
//     let str = '';
//     let a = my_string.length - n;
//     for (let i = a; i < my_string.length; i++) {
//         str += my_string.charAt(i);
//     }
//     return str;
// }

// function solution(my_string, n) {
//     return my_string.substring(my_string.length - n);
// }

// function solution(my_string, n) {
//     var answer = my_string.slice(-1*n);
//     return answer;
// }

//console.log(solution('heww1world', 3));

//문자열 앞의 n글자

// function solution(m, n) {
//     var answer = '';
//     for(let i = 0; i<n; i++){
//         answer += m[i]
//     }
//     return answer;
// }

// console.log(solution('hello', 2));

// 접미사인지 확인하기
// function solution(my_string, is_suffix) {
//     let a = my_string.length - is_suffix.length;
    
//     return my_string.substring(a) === is_suffix ? 1 : 0;
    
// }

//const solution = (str, suff) => str.endsWith(suff) ? 1 : 0

// function solution(my_string, is_suffix) {
//     return Number(new RegExp(`${is_suffix}$`).test(my_string))
// }



console.log(solution('banana', 'ana'));
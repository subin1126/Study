// function solution(my_string) {
//     let b = my_string.split('').reverse();
//     let ans = '';
//     for(let i = 0; i<b.length; i++){
//         ans += b[i];
//     }
//     return ans;
// }

function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}

function solution(my_string) {
    return my_string.split('').reverse().join('');
}




console.log(solution('jaron'));
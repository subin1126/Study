// function solution(my_string, n) {
//     let arr = [];
//     let ans = [];

//     arr = my_string.split('');

//     for(let i =0; i<arr.length; i++){
//         for(let j =1; j<n+1; j++){
//             ans.push(arr[i]);
//         }
//     }

//     return ans.join('');
// }

function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}

function solution(my_string, n) {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
}

function solution(my_string, n) {
    let ans = '';
    for (let s of my_string) ans+=s.repeat(n);
    return ans;
}




console.log(solution('hello', 3));
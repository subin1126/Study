// function solution(n){

//     const str =  n.toString();
//     let ans = 0;

//     for (const i of str) {
//         ans += parseInt(i);
//     }

//     return ans;

// }

// function solution(n) {
//     return n
//     .toString()
//     .split('')
//     .reduce((acc, current) => acc + +current, 0);
// }

function solution(n) {
    let result = 0;

    while (n > 0) {
        result += n % 10;

        n = Math.floor(n/10);
    }

    return result;
}

function solution(n) {
    var answer = 0;
    let j = n
    for(let i = 0; i < j; i++){
        answer+=n%10;
        n = Math.floor(n/10);
    }
    return answer;
}

console.log(solution(1234));
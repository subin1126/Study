// function solution(a, b) {
//     var c = a.toString();
//     var d = b.toString();

//     if((c+d) > (d+c)){
//         return parseInt(c+d);
//     } else {
//         return parseInt(d+c);
//     }
// }

// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }

// function solution(a, b) {
//     var answer = 0;
//     return `${a}${b}` > `${b}${a}` ? Number(`${a}${b}`) : Number(`${b}${a}`);
// }

function solution(a, b) {
    let x = String(a)+b;
    let y = String(b)+a;
    return x >= y ? Number(x) : Number(y)
}

// function solution(a, b) {
//     var answer = 0;
//     let ab = '' + a + b;
//     let ba = '' + b + a;
//     answer = Math.max(ab,ba);
//     return answer;
// }

console.log(solution(89,8));

// function solution(a, b) {
//     var str = `${a}${b}`;
//     if(Number(str) > (2*a*b)){
//         return Number(str);
//     } else if(Number(str) < (2*a*b)){
//         return 2*a*b;
//     } else if(Number(str) === (2*a*b) ){
//         return Number(str);
//     }
// }

function solution(a, b) {
    let num1 = parseInt(a+""+b+""); //a+"" string변환 와우!
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
}
//num1 === num2 일 때 num1을 리턴하라는 말은 정답 값에 num2도 허용된다는 말과같음
//와 그러네;;;; 나 완전 바보;;;;;;;
console.log(solution(9,12));
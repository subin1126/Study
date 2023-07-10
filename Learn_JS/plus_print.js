// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     console.log(`${input[0]} + ${input[1]} = ${Number(input[0]) + Number(input[1])}`);
// });

//n보다 커질 때까지 더하기
// function solution(numbers, n) {
//     let a = 0;
//     for(let i = 0; i<numbers.length; i++){
//         a += numbers[i];
//         if( a> n){
//             break;
//         }  
//     }
//    return a;
// }

// function solution(numbers, n) {
//     var answer = 0;
//     let i = 0;
//     while(answer <= n) {
//         answer += numbers[i++]
//     }
//     return answer;
// }

// function solution(numbers, n) {
//     return numbers.reduce((a,c,i,t)=>(a<=n)?a+c:a)
// }

function solution(numbers, n) {
    let ans = 0;
    while (ans<=n) ans+=numbers.shift();
    return ans;
}
// shift : 배열에서 첫번째 요소를 제거하고, 해당 요소를 반환
// numbers 배열의 첫번째 요소를 ans에 더해줌으로써 누적값 계산
// 아 그런데 shift는 원본 배열의 순서가 변할 수 있대
// <= 때까지 루프 실행 : 즉 n보다 작을 때마다 ans값 증가
// n을 초과하여 ans 값이 n보다 커지는 순간 루프 종료

console.log(solution([58, 44, 27, 10, 100], 139));

//두 수의 합, 논리연산자 사용
function solution(num1, num2) {
    var answer = 0;

    function add(a,b) {
        if (b==0) return a

        let sum = a^b;
        let carry = (a&b) << 1;

        return add(sum, carry);
    }

    return add(num1,num2);
}
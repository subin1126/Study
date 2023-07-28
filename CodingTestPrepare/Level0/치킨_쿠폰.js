// function solution(chicken) {
//     let coupon = chicken;
//     let service = 0;

//     while(coupon >= 10) {
//         service += Math.floor(coupon/10);
//         coupon = coupon%10 + Math.floor(coupon/10);
//     }

//     return service;
// }

//function solution(chicken) {
//     var answer = parseInt((chicken-1) / 9);
//     return answer;
// }

function solution(chicken) {
    return ~~(chicken*0.111111)
}

console.log(solution(1081));
// function solution(money) {
//     let arr = [];

//     arr[0] = Math.floor(money / 5500);
//     arr[1] = money % 5500;

//     return arr;
// }

function solution(money) {
    return [~~(money/5500),money%5500];
    // 수식 계산후 정수로 변환하는 것
}

console.log(solution(15000));
// var sum = 0;
// var multi = 1;
// function solution(num_list){
//     for(let i =0; i<=num_list.length-1; i++){
//         sum += num_list[i];
//         multi *= num_list[i];
//     }
//     if((sum*sum) > multi){
//         return 1;
//     } else {
//         return 0;
//     }
    
// }

// function solution(num_list) {
//     let accMul = 1
//     let accSum = 0
//     for (const num of num_list) {
//         accMul *= num
//         accSum += num
//     }
//     return accMul < accSum ** 2 ? 1 : 0
// }

// function solution(num_list) {
//     let mul = num_list.reduce((a, c) => {return a*c ;}, 1);
//     let sum = num_list.reduce((a, c) => {return a+c ;}, 0);
//     return (mul < sum*sum) ? 1 : 0;
// }

function solution(num_list) {
    let number1 = 1;
    let number2 = 0;

    num_list.forEach((value) => {
        number1 = Math.imul(number1, value);
        number2 += value;
    });
    return number1 > number2**2 ? 0 : 1;
}

// function solution(num_list) {
//     const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);
//     const multiply = (arr) => arr.reduce((acc, num) => acc * num, 1);
//     return multiply(num_list) < sum(num_list) ** 2 ? 1 : 0;
//   }

console.log(solution([5,7,8,3]));
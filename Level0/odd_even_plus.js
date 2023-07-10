// function solution(n) {
//     var m = 0;

//     if (n % 2 === 1) {
//         for (let i = 1; i <= (n / 2) + 1; i++) {
//             m += ((2 * i)) - 1;
//         }
//     }
//     else if (n % 2 === 0) {
//         for (let i = 1; i <= (n/2); i++) {
//             m += ((2*i) **2);
//         }
//     }

//     return m;
// }

// function solution(n) {
//     var answer = 0;

//     if(n%2==0){
//         for(let i=1; i<=n; i++){
//             if(i%2==0){
//                 answer += i*i;
//             }
//         }
//     }
//     else{
//         for(let i=1; i<=n; i++){
//             if(i%2==1){
//                 answer += i;
//             }
//         }
//     }

//     return answer;
// }

// function solution(n) {
//     const array = Array(n).fill().map((x,idx)=> idx+1);
//     return n%2 === 0 ? array.reduce((a,b) => b%2===0 ? a+Math.pow(b,2) : a, 0) : array.reduce((a,b) => b%2===0 ? a : a+b, 0);
// }

// function solution(n) {
//     let oddSum = 0;
//     let evenSum = 0;

//     for(let i = n; i > 0; i--) {
//         if(i%2==0) {
//             evenSum += Math.pow(i, 2);
//         } else {
//             oddSum += i;
//         }
//     }

//     return n%2 == 0 ? evenSum : oddSum;
// }

function solution(n) {
    if(n%2===1)
      return  (n+1)/2*((n + 1)/2) ; //자연수 거듭 제곱의 합을 구하는 공식
    else
      return   n*(n+1)*(n+2)/6; //등차수열 합 공식
}

console.log(solution(10));

//1 3 5 7 => 16
// 2 4 => 4 16 => 20
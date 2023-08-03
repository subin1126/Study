// function solution(num) {
//     let arr = [];
//     let i = 1;
//     while(arr.length < num)
//     {
//         if(!(i%3 === 0) && !(String(i).includes('3'))){
//                 arr.push(String(i));
//         } 
//         i++;

//     }
//     return +arr[arr.length-1];
// }

//아 arr[num-1]을 return 할거니까 애초에 Array크기를 대충 3배 이정도로 크게 잡고 시작한거같음
// function solution(n) {
//     return [...Array(n * 3)]
//         .map((_, i) => i + 1)
//         .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
// }

// function solution(n) {
//     for(let i=1; i<=n; i++){
//         if(i%3 == 0){
//             n++;
//         }
//         if(String(i).includes("3")&& i%3 != 0){
//             n++
//         }
//     }
//     return n;
// }

// const solution = (n) => {
//     let result = 0
//array의 길이가 n이 될때까지 작업 반복
    // Array.from({ length: n }).forEach(() => {
    //   result += 1
    //   result = chkThree(result)
    // })
  
//     return result
//   }
  
//   const chkThree = (value) => {
//     return /3/g.test(value) || !(value % 3) ? chkThree(value + 1) : value
//   }


//some은 배열의 각 요소에 대해 콜백함수를 실행
//해당 요소에 대한 평과 결과를 반환
//콜백함수의 반환값이 최소한 하나라도 true가 되면 true를 반환,
//모든 요소에 대해 false를 반환하면 false 반환
// const numbers3x = [0]

// const solution = (num) => {
//   for (let i = 1; numbers3x.length <= 100;i++){
//     if(i % 3 === 0 ) continue
//     if(["3"].some(x => [...("" + i)].includes(x))) continue
//     numbers3x.push(i)
//   }
//   console.log(numbers3x)
//   return numbers3x[num]
// }

// function solution(n) {
//     let cnt = 0;
//     for(let i = 1; i <= n; i++) {

//         cnt++;
//         while(String(cnt).indexOf('3') > -1 || cnt % 3 === 0) {

//             cnt++;
//         }
//     }

//     return cnt;
// }

console.log(solution(15));
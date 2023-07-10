// var odd = '';
// var even = '';
// var plus = 0;
// function solution(num_list){
//     for(let i = 0; i<=num_list.length-1; i++){
//         if(num_list[i]%2===1){
//             odd += num_list[i].toString();       
//         } else {
//             even += num_list[i].toString();
//         }
//     }
//     plus = Number(odd) + Number(even);
    
//     return plus;
// }

// function solution(num_list){
//     //                                          누적값      , 요소
//     const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
//         if(num % 2 === 0){
//             evens.push(num);
//         } else {
//             odds.push(num);
//         }
//         return { odds, evens }; //반환값
//     }, { odds: [], evens: [] }); //초기값

//     return Number(odds.join('')) + Number(evens.join(''));
// }

// function solution(num_list) {
//     const odd = [...(num_list+"")].map(x => Number(x)%2 === 1 ? x : "").join("")
//     const even = [...(num_list+"")].map(x => Number(x)%2 === 0 ? x : "").join("")
//     return Number(odd)+Number(even);
// }

function solution(num_list) {
    //와! 문자열로 a,b를 읽고 10진수로 파싱하는거래
    //parseInt()의 두번째 인자는 선택적 진법을 받음, 기본값은 10
    const concat = (a, b) => parseInt(`${a}${b}`, 10);
    const [odd, even] = num_list.reduce(
      ([odd, even], num) => (num % 2 ? [concat(odd, num), even] : [odd, concat(even, num)]),
      [0, 0],
    );
    return odd + even;
  }

console.log(solution([5, 7, 8, 3]));
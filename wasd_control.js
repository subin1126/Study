// function solution(n, control){
//     for(let i = 0; i<=control.length-1; i++){
//         if(control[i] === "w"){
//             n++;
//         } else if(control[i] === "s"){
//             n--;
//         } else if(control[i] === "d"){
//             n += 10;
//         } else if(control[i] === "a"){
//             n -= 10;
//         }
//     }
//     return n;
// }

// const operations = {
// //key = wasd, 각 대응하는 함수를 value로 가지고 있음
// //op : 현재 처리 중인 연산을 나타냄
//     w: (n) => n + 1,
//     s: (n) => n - 1,
//     d: (n) => n + 10,
//     a: (n) => n - 10,
//   };
  
//   function solution(n, control) {
//     //                      누적값, 현재요소                       초기값
//     return [...control].reduce((prev, op) => operations[op](prev), n);
//     //operations[op](prev) : 해당함수를 prev 인자와 함께 호출
//     //prev값을 인자로 전달하여 operations[op]에 해당하는 함수 실행
//     //op가 'w', prev = 10이면 해당함수를 실행해 11이됨
//   }


//   function solution(n, control) {
//     for(let i = 0 ; i < control.length ; i++){
//         switch(control[i]) {
//             case "w" : n++;break;
//             case "s" : n--;break;
//             case "d" : n+=10;break;
//             case "a" : n-=10;break;
//         }
//     }
//     return n;
// }

// function solution(n, control) {
//     return Array.from(control).reduce((acc, word) => {
//         if (word === 'w') return acc + 1
//         if (word === 's') return acc - 1
//         if (word === 'd') return acc + 10
//         if (word === 'a') return acc - 10
//         return acc
//     }, n)
// }

// function solution(n, control) {
//     var answer = n;
//     const o = {
//         "w" : 1,
//         "s" : -1,
//         "d" : 10,
//         "a" : -10,
//     }

//     control.split('').forEach(e => answer += o[e])
//     return answer;
// }

function solution(n, control) {
    return [...control].map(x => setValue(x)).reduce((a, b) => a+b, n);
}
function setValue(s){
    return s==="w" ? 1 : s==="s" ? -1 : s==="d" ? 10 : -10;
}

console.log(solution(0, "wsdawsdassw"));
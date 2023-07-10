// function solution(arr, queries) {
//     //배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
//     return queries.reduce((acc, cur) => {
//         const copyAcc = [...acc]
//         const [to, from] = cur
//         const box = acc[to]
//         copyAcc[to] = copyAcc[from]
//         copyAcc[from] = box
//         return copyAcc
//     }, [...arr])
// }

//위의 코드를 for문으로 푼 것
function solution(arr, queries) {
    const copyAcc = [...arr];
  
    for (let i = 0; i < queries.length; i++) {
      const [to, from] = queries[i];
      console.log([to,from]);
      const box = copyAcc[to];
      copyAcc[to] = copyAcc[from];
      copyAcc[from] = box;
      //console.log(copyAcc);
    }
  
    return copyAcc;
  }

// function solution(arr, queries) {
//     queries.forEach( ([a,b]) => {
//         [arr[a],arr[b]] = [arr[b],arr[a]];
//     })
//     return arr;
// }
//위의 코드를 for문으로 돌리면 이렇게 되나봄
// function solution(arr, queries) {
//     for(let [i, j] of queries) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }

// function solution(arr, queries) {
//     queries.map((x,i) => {
//         let a = arr[x[0]]
//         let b = arr[x[1]]

//         //splice 교환, slice 삭제
//         arr.splice(x[0], 1, b);
//         console.log(arr);
//         arr.splice(x[1], 1, a);
//         console.log(arr);
//     });

//     return arr;
// }

console.log(solution([0,1,2,3,4], [[0,3],[1,2],[1,4]]));
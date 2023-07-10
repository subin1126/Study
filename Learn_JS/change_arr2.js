// function solution(arr, queries) {
//     var ret = [];
//     for (let i = 0; i <= queries.length - 1; i++) {
//         var [a, b, c] = queries[i];

//         var ab = []
//         for (var j = a; j <= b; j++) {
//             ab.push(arr[j]);
//         }

//         var min = [];
//         for (var j = 0; j < ab.length; j++) {
//             if (ab[j] > c) {
//                 min.push(ab[j]);
//             }
//         }

//         var not = -1;
//         for (var j = 0; j < min.length; j++) {
//             if (not === -1 || min[j] < not) {
//                 not = min[j];
//             }
//         }
//         ret.push(not);
//     }
//     return ret;
// }

// function solution(arr, queries) {
//     return queries.map(([s, e, k]) => 
//     arr.slice(s, e + 1)
//     .filter((n) => n > k)
//     .sort((a, b) => a - b)[0] || -1);
// }

// function solution(arr, queries) {
//     return queries.map(([s, e, k]) => {
//         let result = -1
//         for (let i = s; i <= e; i += 1) {
//             const v = arr[i]
//             if (v <= k) continue
//             result = result === -1 ? v : Math.min(result, v)
//         }
//         return result
//     })
// }

function solution(arr, queries) {
    let answer = [];
    for (let i = 0; i < queries.length; i++) {
        const [s, e, k] = queries[i];
        let tempMax = Infinity;
        for (let j = s; j <= e; j++)
            if (arr[j] > k) {
                tempMax = Math.min(tempMax, arr[j]);
            }
        if (tempMax === Infinity) tempMax = -1;
        answer.push(tempMax);
    }
    return answer;
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 2], [0, 3, 2], [0, 2, 2]]));

//var arr = [0, 1, 2, 6,5, 4, 3, 10];
//var c = arr[2]; //위의 예제에서 c=2이라서 초기값을 arr[2]로 잡음. 내가 원하는 값은 3이 나와야함!!!!!!!
//c보다 큰 수 중 제일 작은거(min) 구하려는거니까
//var min = arr[2+1];
// for(let i=min; i<arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
//console.log(min);


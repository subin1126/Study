//조건에 맞게 수열 변환하기1

// function solution(arr) {
//     let ans = [...arr];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] >= 50 && arr[i] % 2 === 0){
//             ans[i] = arr[i]/2;
//         } else if(arr[i] < 50 && arr[i] % 2 === 1){
//             ans[i] = arr[i]*2;
//         }
//     }
//     return ans;
// }

//const solution=a=>a.map(v=>v>=50&&v%2==0?v/2:v<50&&v%2==1?v*2:v);

// function solution(arr) {
//     return arr.map(num => {
//         if(num >= 50 && !(num % 2)) return num / 2;
//         if(num < 50 && num % 2) return num * 2;
//         return num;
//     })
// }

function solution(arr) {
    for (const [ i, num ] of arr.entries()) {
        if (num >= 50 && num % 2 === 0) {
            arr[i] /= 2;
        } else if (num < 50 && num % 2 === 1) {
            arr[i] *= 2;
        }
    }
    return arr;
}

console.log(solution([1,2,3,100,99,98]));
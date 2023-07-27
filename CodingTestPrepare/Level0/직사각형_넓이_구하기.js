// function solution(arr) {
//     let left = [];
//     let right = [];
    
//     for (let i = 0; i < arr.length; i++) {
//       var [to, from] = arr[i];
//       left.push(to);
//       right.push(from);
//     }
  
//     let max = Math.max(...left);
//     let min = Math.min(...left);
  
//     let max2 = Math.max(...right);
//     let min2 = Math.min(...right);
  
//     return (max-min) * (max2-min2);
//   }

// function solution(dots) {
//     let x = [],
//         y = [];

//     for (let pos of dots) {
//         x.push(pos[0]);
//         //console.log(x);
//         y.push(pos[1]);
//     }

//     return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
// }

// const solution = dots => {
//     const x = [...new Set(dots.map(p => p[0]))]
//     console.log(x);
//     const y = [...new Set(dots.map(p => p[1]))]
//     console.log(y);
//     return Math.abs((x[0] - x[1]) * (y[0] - y[1]))
// }

// var s=Math.abs,solution=([[a,b],[c,d],[e,f]])=>s(a-(a==c?e:c))*s(b-(b==d?f:d));

function solution(dots) {
    return Math.abs(parseInt(dots.sort()[3][0]) - parseInt(dots.sort()[0][0])) * Math.abs(parseInt(dots.sort()[3][1]) - parseInt(dots.sort()[0][1]))
}

console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]));

//arr[i][0] 중에 제일 큰 값 - arr[i][0] 중에 제일 작은 값
//arr[i][1] 중에 제일 큰 값 - arr[i][1] 중에 제일 작은 값
//둘이 곱하기

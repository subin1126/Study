// var ret = 0;
// function solution(a,b,c){
//     if(a === b && b === c){
//         ret = (a+b+c) * (Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2)) * (Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)) ;
//     } else if(a === b || a === c || b === c){
//         ret = (a+b+c) * (Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2));
//     } else if( a != b && a != c && b != c){
//         ret = a+b+c;
//     }
//     return ret; 
// }

// const solution = (...nums) => {
//     const matchCount = getMatchCount(nums);
  
//     return squareSequence(nums, matchCount);   
//   }
  
//   const getMatchCount = (nums) => Math.max(...Object.values(frequency(nums)));
  
//   const frequency = (nums) => nums.reduce(
//     (acc, num) => ({...acc, [num]: acc[num] ? acc[num] + 1 : 1})
//     , {});
  
//   const squareSequence = (nums, squared) => {
//     if (!squared) return 1;
  
//     return sum(nums, (n) => n ** squared) * squareSequence(nums, squared - 1);
//   }
  
//   const sum = (nums, f) => nums.reduce((acc, num) => acc + f(num), 0);

// function solution(a, b, c) {
//     let map = {
//       [a]: a,
//       [b]: b,
//       [c]: c,
//     };
//     let len = 4 - Object.keys(map).length;
//     return Array(len)
//       .fill(0)
//       .reduce((acc, _, i) => {
//         return acc * (a ** (i + 1) + b ** (i + 1) + c ** (i + 1));
//       }, 1);
//   }

const solution = (a, b, c) => {
    const set = new Set([a, b, c]);
    switch ([...set].length) { 
        //set.length가 1이면 모든 값이 동일하다는 뜻 => case1
        case 1: return calculate([a, b, c], 3);
        case 2: return calculate([a, b, c], 2);
        case 3: return calculate([a, b, c]);
    }
};

const calculate = (inc, n=1) => {
    const [a, b, c] = inc;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i)
    }

    return result;
};

console.log(solution(5,3,3));
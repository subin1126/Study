function solution(queries) {

  let left = [];
  let right = [];
  
  for (let i = 0; i < queries.length; i++) {
    var [to, from] = queries[i];
    left.push(to);
    right.push(from);
  }

  let max = Math.max(...left);
  let min = Math.min(...left);

  let max2 = Math.max(...right);
  let min2 = Math.min(...right);

  return `left : ${max} ${min}, right : ${max2} ${min2}`;
}

console.log(solution([[1, 2], [3, 4], [5, 6]]));

// let a, b, rest;
// [a,b] = [10,20];
// console.log(a); //10

//let c = [1,2,3,4,5];


// function solution(start, end){
//   let arr = [];

//   for(let i =start; i<end+1; i++){
//     arr.push(i);
//   }

//   return arr;

// }

// console.log(solution(3, 10));

// function solution(arr, n){
//   for(let i =0 ; i<arr.length; i++){
//     if(arr[i] === n ){
//       return 1;
//     }
//   }
//   return 0;

// }

// console.log(solution([1,2,3,4,5], 3));

// var arr = [1,2,3,4,5];

// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }

// var a = 98;
// var b = 3;

// if(a%b === 0){
//   console.log(1);
// } else {
//   console.log(0);
// }




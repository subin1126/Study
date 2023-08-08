nums = Array(20).fill().map((_, i) => i);
// console.log(nums.splice(5,3));
// console.log(nums);

nums.splice(5, 0, -5, -6, -7); 
//index = 5부터 0개 삭제 그 자리에 -5, -6, -7 삽입
console.log(nums);

// console.log(nums.splice(5,2));
// console.log(nums);

// console.log(nums.splice(5, 3, 10, 20));
// console.log(nums);

// console.log(nums.splice(15));
// console.log(nums);

num = Array(20).fill().map((_, i) => i);
//console.log(num);

//console.log(num.slice(1));
// console.log(num.slice(5,8)); //index = 5부터 8 전까지 추출 => 원본배열 영향 x
// console.log(num);
// console.log(num.slice(3)); //index=3부터 끝까지 추출
// console.log('악' , num);
// console.log('으악',num.slice(-1)); //마지막 1개 19
// console.log('으아악',num.slice(-1,2)); // [] 빈배열
// console.log('으오악',num.slice(-3)); //마지막 1개부터 거꾸로 3개 17, 18, 19
// console.log(num.splice(5,3)); //index = 5부터 3개 없앰 => 원본배열 영향 o
// console.log(num);

const a = 'hello';
const b = 'elloh';

console.log(a.slice(-1)); // 'o'
console.log(a.slice(0,a.length-1)); // 'hell'
console.log(a.charAt(4));


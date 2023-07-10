// function solution(my_string, target) {
//     return my_string.includes(target) ? 1 : 0;

// }

// const solution = (s, t) => +(s.indexOf(t) > -1);

// function solution(my_string, target) {
//     return my_string.split(target).length > 1 ? 1 : 0;
// }

//위의 식을 풀어서 씀
// function solution(my_string, target){
//     let a = my_string.split(target).length;
//     console.log(a);
//     console.log(my_string.split(target));
//     if(a > 1){
//         return 1;
//     }
//     return 0;
// }

console.log(solution('banana', 'x'));


// var a = 'hello';
// var b = 'ell';
// console.log(a.split(b)); //['h', 'o']

// let a = '';
// for (let i = 0; i < my_string.length; i++) {
//     a += my_string.charAt(i);
// }
// return a;
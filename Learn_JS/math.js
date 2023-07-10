function solution(flo) {
    return Math.floor(flo);
}

//floor는 소숫점 내림함수

function solution(flo) {
    var answer = Math.trunc(flo);   
    return answer;
}

//trunc : 소수 부분을 버리고 정수 부분만 남긴 숫자를 반환

//n번째 원소까지
// function solution(num_list, n) {
//     let arr = [];
    
//     for(let i =0; i< n; i++){
//         arr.push(num_list[i]);
//     }
    
//     return arr;
// }

// function solution(num_list, n) {
//     var answer = [];
//     answer = num_list.slice(0,n);
//     return answer;
// }

function solution(num_list, n) {
    var answer = num_list.filter((item,index)=>index<n);
    return answer;
}

//접두사인지 확인하기
//function solution(my_string, is_prefix) {
//     if(my_string.indexOf(is_prefix) === 0){
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }

// function solution(my_string, is_prefix) {
//     return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
// }

// function solution(my_string, is_prefix) {
//     return +my_string.startsWith(is_prefix);
//   }
// //startsWith : 문자열이 특정 문자열로 시작하는지 여부를 확인

// function solution(my_string, is_prefix) {
//     var answer = 0;

//     if(my_string.length < is_prefix.length){
//         return 0;
//     }

//     for(let i = 0; i<is_prefix.length; i++){
//         if(my_string[i] !== is_prefix[i]){
//             return 0;
//         }
//     }

//     return 1;;
// }

// function solution(my_string, is_prefix) {
//     return my_string.split(is_prefix)[0]===""?1:0;
// }

// const solution = (my_string, is_prefix) => {
//     const regExp = new RegExp(`^${is_prefix}`);
//     // console.log(regExp)
//     if(regExp.test(my_string)) return 1;
//     return 0;
// }

// function solution(my_string, is_prefix) {
//     return my_string.substring(0,is_prefix.length) === is_prefix ? 1 : 0
// }



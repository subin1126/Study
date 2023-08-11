// function solution(sides){
//     let arr = [...sides].sort((a,b) => a-b);

//     return (arr[0]+arr[1]) > arr[2] ? 1:2;
// }

// function solution(sides) {
//     var answer = 0;
//     const max = Math.max(...sides);
//     const sum = sides.reduce((a,b) => a + b, 0) - max;

//     answer = max < sum? 1 : 2;

//     return answer;
// }

//구조분해할당을 잊고있었다!
function solution(sides) {
    const [long, a, b] = sides.sort((a,b) => b-a);

    return long < a + b ? 1 : 2


}



console.log(solution([1,2,3]));
var a = [1,2,3,4,5];

//이런식으로 배열에 접근해서 원하는 요소만 볼 수 있음
//console.log(a.at(-2));
//console.log(a.at(2));

// function solution(num_list) {
//     const [,,, a, b] = [...num_list];
//     //오 이런식으로 배열에 값 넣을 수 있음
//     return [a, b];
// }

function solution(num_list){
    const [last, prev] = [num_list[num_list.length-1], num_list[num_list.length-2]];
//num_list를 복사해서, last-prev를 추가한 새로운 배열 return
    return last > prev ? [...num_list, last-prev] : [...num_list, last*2];
}


console.log(solution([5,2,1,7,5]));


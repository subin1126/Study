// function solution(num_list){
//     if(num_list[num_list.length-1] > num_list[num_list.length-2]){
//         num_list.push(num_list[num_list.length-1] - num_list[num_list.length-2]);
//     } else if(num_list[num_list.length-1] <= num_list[num_list.length-2]){
//         num_list.push(num_list[num_list.length-1]*2);
//     }
//     return num_list;
// }

// function solution(num_list) {
//     //배열을 뒤집고 첫번째 요소, 두번째 요소가 a, b에 대입
//     const [a, b] = [...num_list].reverse();
//     return [...num_list, a > b ? (a-b):a*2];
//     //크다면 > 이기 때문에, 그렇지 않으면 <=
// }

//const solution=n=>[...n,n.at(-1)>n.at(-2)?n.at(-1)-n.at(-2):n.at(-1)*2];

// function solution(num_list) {
//     const lastNum = num_list[num_list.length-1]
//     const num2 = num_list[num_list.length-2]
//     if(lastNum > num2){
//         //               마지막요소  삭제할개수  추가할요소
//         num_list.splice(num_list.length, 1, lastNum-num2) 
//     } else {
//         num_list.splice(num_list.length, 1, lastNum * 2) 
//     }
//     return num_list
// }

// function solution(nums) {
//     const last = nums.pop()
//     const prev = nums.pop()

//     let append;
//     {
//         if(last > prev) append = last - prev
//         else append = last * 2
//     }

//     return [...nums, prev, last, append]
// }

function solution(num_list){
    const [last, prev] = [num_list[num_list.length-1], num_list[num_list.length-2]];
//num_list를 복사해서, last-prev를 추가한 새로운 배열 return
    return last > prev ? [...num_list, last-prev] : [...num_list, last*2];
}

console.log(solution([5,2,1,7,5]));
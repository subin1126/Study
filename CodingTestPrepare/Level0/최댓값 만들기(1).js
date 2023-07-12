// 배열의 원소 중 두개를 곱해 만들 수 있는 최댓값

// function solution(numbers) {
//     let temp = 0;
//     for(let i =0; i<numbers.length; i++){
//         for(let j = i+1; j<numbers.length; j++){
//             if(numbers[i]> numbers[j]){
//                 temp = numbers[i];
//                 numbers[i] = numbers[j];
//                 numbers[j] = temp;
//             }
//         }
//     }
//     return numbers[numbers.length-1] * numbers[numbers.length-2];
// }

// function solution(numbers) {
//     numbers.sort((a,b)=>b-a);
//     return numbers[0]*numbers[1];
// }
// 비교함수 (a, b) => b-a 를 이용하여 내림차순으로 정렬
// b-a의 결과가 양수면 b가 a보다 큰 것으로 판단되어 b가 앞으로 이동
// b-a의 결과가 음수면 a가 b보다 큰 것으로 판단되어 a가 앞으로 이동

// 그런데 sort함수는 O(nlogn)이라, 그냥 배열 순회하며 큰 값 두개 찾는게
// O(n)이므로 더 효율적이래 w0w

// function solution(numbers) {
//     let [a, b] = numbers.sort((a,b) => b - a);
//     return a * b;
// }

// function solution(numbers) {
//     numbers = numbers.sort((a, b) => a - b);
//     return numbers.at(-1) * numbers.at(-2);
// }
// 배열의 특정 인덱스에 해당하는 값을 반환
// 음수를 사용하여 역방향으로 접근 중

// function solution(numbers){
//     let a = 0; 
//     let b = 0; 
//     a = Math.max(...numbers); 
//     numbers.splice(numbers.indexOf(a), 1); 
//     b = Math.max(...numbers);

//     return a*b;
// }

function solution(numbers) {
    const max1 = numbers.reduce((max, n) => max > n ? max : n, 0)
    const index = numbers.findIndex((n) => n === max1);

    numbers.splice(index, 1)

    const max2 = numbers.reduce((max, n) => max > n ? max : n, 0)

    return max1 * max2;
}


console.log(solution([1, 2, 3, 4, 5, 5]));
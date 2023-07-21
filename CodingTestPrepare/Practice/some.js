const arr = [1, 2, 3, 4, 5];

let answer = arr.some(item => item > 3)

console.log(answer);
//배열 내에 3보다 큰 4, 5가 존재하기 때문에 true 반환

// some 함수
// 배열 내 요소들 중 하나라도 주어진 조건을 만족하는지 확인할 때 사용
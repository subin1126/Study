// 나누기
function solution(num1, num2) {
    return Math.floor(num1/num2); //내림
    // 3.5 -> 3, -3.5 -> -4
}

function solution(num1, num2) {
    return Math.trunc(num1 / num2);
    // trunc : 소수점 삭제 및 정수만 반환
    // 소수점만 삭제하고 싶다면 trunc를 쓰자
}

function solution(num1, num2) {
    return (num1 / num2)<<0; // left shift
}

function solution(num1, num2) {
    return ~~(num1/num2); // 틸트 연산자
}

// 빼기
function solution(num1, num2) {
    num1 >= -50000 && num1 <= 50000
    num2 >= -50000 && num2 <= 50000
    var answer = num1 - num2;
    return answer;
}

function solution(num1, num2) {
    var answer = 0;

    if (!(-50000 <= num1 <= 50000 && -50000 <= num2 <= 50000)) throw new Error;

    answer = num1 - num2;

    return answer;
}

// 곱하기
function solution(num1, num2) {
    0< num1 <=100, 0< num2 <=100
    var answer = num1 * num2;
    return answer;
}




console.log(solution(10, 5));
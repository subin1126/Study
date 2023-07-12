// 피자가 7조각임
// 14명 왔을 때 2판 나오는 이걸 생각해야함

// 사람이 n명이 골고루 한 조각씩 먹으려면, 최소 몇 판 필요하나?


function solution(n){
    return Math.ceil(n/7);
}

function solution(n) {
    return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
}

function solution(n) {
    return ~~(n / 7) + (n % 7 ? 1 : 0);
}



console.log(solution(1));
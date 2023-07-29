// function solution(a, b){
// 오답임 이거 걍 최대공약수 구하는 방법 중에 이게 있어서 적음
//     let c = a % b;
//     let d = b % c;
//     let e = c % d; // 최대 공약수
    
//     let f = Math.floor(b / e);
    

//     return f % 2 ===0 || f % 5 === 0 ? 1 : 2;

// }

// function solution(a, b){
//     let 최대공약수 = 0;
//     for(let i = 1; i <= b; i++){
//         if(a%i === 0 && b%i === 0) 최대공약수 = i;
//     }

//     b = b/최대공약수;

//     while(b%2 === 0) b = b/2;
//     while(b%5 === 0) b = b/5;

//     return b === 1 ? 1 : 2;

// }

function solution(a, b) {
    while (b % 2 === 0) {
        b /= 2;
    }
    while (b % 5 === 0) {
        b /= 5;
    }

    console.log(a, b);
    return a % b ? 2 : 1;
}


console.log(solution(12, 21));


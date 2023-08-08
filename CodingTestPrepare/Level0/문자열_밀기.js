function solution(A, B){
    if(A === B){
        return 0;
    }

    let count = -1;

    for(let i = 1 ; i<A.length; i++){
        const push = A.slice(-i);
        const pushed = A.slice(0, A.length-i);

        if(push.concat(pushed) === B){
            count = i;
            break;
        }
    }

    return count;

}


//와 미쳤다 진짜 ㄷㄷㄷㄷㄷㄷ
let solution=(a,b)=>(b+b).indexOf(a);

function solution(A, B) {
    if (A === B) return 0

    let arr = Array.from(A);
    let count = 0;

    while (count < B.length) {
        count++
        arr.unshift(arr.pop());
        if (arr.join('') === B) {
            return count
        }
    }

    return -1;
}

function solution(A, B) {
    A = [...A];
    B = [...B];
    let i=0;
    for(i; i<A.length;i++){
        if(A.join('') === B.join('')) break;
        A.unshift(A.pop());
        console.log(A.join(''), B.join(''))

    }
    return i===A.length ? -1 : i
}

console.log(solution("abca", "aabc"));
function solution(n, k) {

    let sum = n*12000 + k*2000;

    let service = Math.trunc(n/10);

    let discount = 2000 * service;

    return n>=10 ? sum - discount : sum;


}

function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}


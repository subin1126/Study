//약수 개수 묻는거임

function solution(n) {
    let count = 0;

    for(let i =1; i<n+1; i++){
        n%i ===0 ? count++ : count ;
    }
    return count;

}
 
//와 내꺼랑 같은 뜻이래
return Array(n).fill(1).map((v,idx) => v + idx).filter(v => n % v === 0).length;
//v : 현재요소
//idx : 인자
//v + idx : 배열의 각 요소에 인덱스 추가 후 약수 필터
//시간복잡도 O(n)

function solution(n) {
    let ans = 0;
    for (let i = 1; i < Math.sqrt(n); i++)
        if (n%i === 0) ans+=2;

    return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
}
//이게 시간복잡도가 좋대 O(루트n) 시간이라함
//아 제곱근까지 반복문 돌리니까
// 나누어떨어지는거 한개 발견하면 기본 쌍이있으니까 2개씩 증가
//Number.isInteger(Math.sqrt(n)) : 제곱근이 정수인지 확인
//정수라면 1을더함 : 제곱근이 약수인 경우, 해당 약수가
//중복으로 계산되지 않도록 하기위해

function solution(n) {
    const answer = []
    for (let i = 0; i < n + 1; i++) {
        if (n % i === 0) {
            answer.push(i)
        }
    }
    return answer.length
}
function solution(n) {
    let ret = 0;
    for(let i = 1; i<n+1; i++){
        if(i%2===0){
            ret += i;
        }
    }
    return ret;
}

function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}

function solution(n) {
    var answer = 0;

    for(let i=2 ; i<=n ; i+=2)
        answer += i;

    return answer;
}

function solution(n) {
    return Array(n)
      .fill()
      .map((_, i) => i + 1)
      .filter((v) => v % 2 === 0)
      .reduce((acc, cur) => acc + cur, 0);
  }

  
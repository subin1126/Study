function solution(num_list) {
    let arr = [];
    
    let even = 0;
    let odd = 0;
    
    for(let i =0; i<num_list.length; i++){
        if(num_list[i] %2 === 0){
            even++;
        } else if(num_list[i] %2 ===1){
            odd++;
        }
    }
    arr[0] = even;
    arr[1] = odd;
    return arr;
}

function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}

function solution(num_list) {
    return [
      num_list.filter((num) => num % 2 === 0).length,
      num_list.filter((num) => num % 2 === 1).length,
    ];
  }

  function solution(list) {
    return list.reduce((acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc), [0, 0])
}
// & : 비트 연산자
// cur & 1 이 0이면 cur은 짝수
// cur & 1 이 1이면 cur은 홀수

function solution(array, n) {
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === n){
            count++;
        }
    }

    return count;
}

function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n)
    answer = Array.length

    return answer;
}

function solution(array, n) {
    var answer = 0;
    let pos = 0;

    while(array.indexOf(n, pos) != -1) {
        answer++;
        pos = array.indexOf(n, pos) + 1;
    }

    return answer;
}

function solution(array, n) {
    var answer = 0;
    let mapArr = array.map((x) => {
        if(x === n){
        return  answer++
        }
    });
    return answer;
}


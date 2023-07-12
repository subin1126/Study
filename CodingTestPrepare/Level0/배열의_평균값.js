function solution(numbers) {
    let ret = 0;
    for(let i = 0 ; i<numbers.length; i++){
        ret += numbers[i];
    }

    return ret/numbers.length;
}

function solution(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
}

function solution(numbers) {
    var answer = 0;
    for(i of numbers) {
        answer += i
    }
    return answer / numbers.length;

}

const solution = (numbers) => (numbers[0] + numbers[numbers.length - 1]) / 2;

const solution = (numbers) => numbers.reduce((a, c) => a += c, 0) / numbers.length;



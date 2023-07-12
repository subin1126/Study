function solution(array, height) {
    let count = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] > height){
            count++;
        }
    }
    return count;
}

function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}

function solution(array, height) {
    let result = 0;
    array.map((arr) => height < arr && result++);

    return result;
}

function solution(array, height) {
    let count = 0;

    for (const a of array) {
        if (a > height) count += 1;
    }

    return count;
}


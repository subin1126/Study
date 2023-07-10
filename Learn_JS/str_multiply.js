// function solution(my_string, k) {
//     var str = '';
//     for(let i =1; i<=k; i++){
//     str+=my_string;}

//     return str;
// }

// function solution(my_string, k) {
//     return my_string.repeat(k)
// }

// function solution(my_string, k) {
//     var answer = '';
//     var i = 0;
//     while(i < k) { answer += my_string; i++; }
//     return answer;
// }

function solution(my_string, k) {
    var answer = '';
    //console.log(Array.from(Array(k).keys()))
    return Array.from(Array(k).keys()).map(function(el){
        console.log(el);
        return my_string})//.join('');
}

//console.log(solution("love",8));


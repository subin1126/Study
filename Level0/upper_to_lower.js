// function solution(myString) {
//     return myString.replace(/[A-Z]/g, match => match.toLowerCase());

// }

// function solution(myString) {
//     return myString.toLowerCase();
// }

// function solution(myString) {
//     return myString.toLocaleLowerCase();
//   }

//toLocaleLowerCase : 언어 및 국가 설정에 따라 문자열을 소문자로 변환

function solution(myString) {
    var answer = '';
    let regExp = /[A-Z]/g
    answer = myString.replace(regExp, function (index) {
        if (index >= "A" && index <= "Z") {
            return index.toLowerCase();
        }

    })
    return answer;
}

console.log(solution('aBcDeFg'));

//lower_to_upper

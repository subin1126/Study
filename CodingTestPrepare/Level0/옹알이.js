// function solution(babbling) {
//     let answer = 0;
//     let arr = ["aya", "ye", "woo", "ma"];

//     for(let i in babbling){
//         let init = babbling[i];

//         for(let j in arr) {
//             if(babbling[i].includes(arr[j])){
//                 init = init.replace(arr[j], "X");
//             }
//         }

//         init = init.replace(/X/gi, "");
//         console.log(init);
//         if(init.length === 0){
            
//             answer++;
//         }
        
//     }
//     return answer;
// }

// function solution(babbling) {
//     var answer = 0;
//     //4개 중 하나 이상의 조합으로 이루어진 문자열을 찾음
//     //^ : 문자열의 시작을 의미하고
//     //$ : 문자열의 끝을 의미
//     //+ : 앞에 오는 패턴이 하나 이상 반복 되는 것을 의미
//     const regex = /^(aya|ye|woo|ma)+$/;
  
//     //balling 배열의 각 단어를 순회
//     babbling.forEach(word => {
//       if (regex.test(word)) answer++;  
//       //test메서드 : 정규표현식과 문자열을 비교하여 일치하는지 여부를 불리언 반환
//     })
  
//     return answer;
//   }

function solution(babbling) {
    const wordSet = new Set(["aya", "ye", "woo", "ma"])
    let result = 0;

    //for-of문 babbling 배열에 있는 각 단어들을 순회하고
    //각 단어를 word에 저장함
    for(const word of babbling) {
        let remainWord = '';
        let prevWord = '';
//babbling -> word
//word -> char
//char -> rainWord : 현재 문자 char를 이어붙임
//wordSet.has : 특정 요소가 존재하는지 확인할 수 있다
        for(const char of word) {
            remainWord += char;
            if(wordSet.has(remainWord)) { //remainword가 4개중 하나라면
                if(remainWord === prevWord) break; //remainWord가 이전에 처리한 문자열과 같다면,
                //중복되는 단어이므로 반복문을 종료한다
                prevWord = remainWord //현재까지 만들어진 문자열을 prevWord에 저장
                remainWord = '' //빈 문자열로 초기화
            }
        }
        if(remainWord === '') result++ //remainWord가 빈 문자열인 경우 : 조합으로 이루어진 경우 result 증가
    }
    return result;
}

console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));

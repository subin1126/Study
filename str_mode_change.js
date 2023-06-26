function solution(code) {
    var mode = 0;
    var ret = '';
    for (let i = 0; i <= code.length - 1; i++) { //문자열 탐색 중
        if (mode === 0 && (i % 2 === 0) && code[i] != '1') {
            ret += code[i];
        }
        if (code[i] === '1') {
            mode = 1;
            i++;
            // if(mode === 1 && (i % 2 === 1) && code[i] != '1'){
            //     ret += code[i];
            // }
        }
        
    }
    return ret;
}

console.log(solution("abc1abc1abc")); // "acbac"

// if (mode === 1 && (i % 2 === 1) && code[i] != '1') {
            //     ret += code[i];
            // }

            // if(code[i] === '0'){
        //     mode = 0;
        // }
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

function solution(my_string) {
    var answer = my_string.split('');
    for(let i = 0; i < answer.length; i++){
        switch(answer[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                answer.splice(i, 1);
                i--;
                break;
        }
    }

    return answer.join('');
}

function solution(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}

function solution(my_string) {
    let answer = '';
    let alpa=['a','e','i','o','u']
    for(let i=0;i<my_string.length;i++){
        if(!alpa.includes(my_string[i])){
            answer+=my_string[i]
        }
    }
    return answer;
}

function solution(my_string) {
    let answer="";
    for(let i=0; i< my_string.length; i++)
        {
            if (my_string[i] === 'a')
                {
                    continue;
                }
            else if (my_string[i] === 'e')
                {
                    continue;
                }
            else if (my_string[i] === 'i')
                {
                    continue;
                }
            else if (my_string[i] === 'o')
                {
                    continue;
                }
            else if (my_string[i] === 'u')
                {
                    continue;
                }
            else
                {
                    answer += my_string[i];
                }

        }
    return answer;
}



console.log(solution('aaaeiou'));
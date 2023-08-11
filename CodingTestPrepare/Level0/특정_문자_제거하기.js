function solution(my_string, letter) {
    let str = [...my_string];

    for (let i = 0; i < my_string.length; i++) {
        if (str[i] === letter) {
            str.splice(i, 1);
            i--;
        }
    }

    return str.join("");
}

function solution(my_string, letter) {
    return my_string.split(letter).join('');
}

function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}

function solution(my_string, letter) {
    let reg = new RegExp(letter, 'g');
    return my_string.replace(reg, '');
}



console.log(solution("BCBdbe", "B"));
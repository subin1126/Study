var str1 = 'aaaaa';
var str2 = 'bbbbb';

function mix(str1, str2){
    var str = '';
    for(let i = 0; i<=str1.length; i++){
        str += (str1.charAt(i)+str2.charAt(i));
        
    }
    return str;
}

console.log(mix(str1,str2));

// function solution(str1, str2){
//     return [...str1].map((x, idx)=> x+str2[idx]).join("");
// }

// function solution(str1, str2) {
//     const strlen = str1.length;
//     let answer="";
//     for(let i = 0 ; i < strlen ; i++)
//         answer+= str1[i]+str2[i];

//     return answer;
// }

function solution(str1, str2) {
    return [...str1].reduce((prev, char, i) => prev + char + str2[i], '');
  }

console.log(solution(str1, str2));

// var str1 = 'aaaaa';
// var str2 = 'bbbbb';
// var str = '';
// for(let i = 0; i<=str1.length; i++){
//     str += (str1.charAt(i) + str2.charAt(i));
// }
// console.log(str);

class Queue {
    constructor(arr) {
        this.queue = [...arr];
        this.front = 0;
        this.back = arr.length - 1;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }
    isEmpty() {
        return this.front === this.back;
    }
    show() {
        return this.queue;
    }
}

function solution(str1, str2) {
    const arr1 = str1.split("");
    const arr2 = str2.split("");
    const queue1 = new Queue([...str1]);
    const queue2 = new Queue([...str2]);

    let answer = arr1.slice().reduce((acc, curr) => {
        const a = queue1?.dequeue() ?? ""
        const b = queue2?.dequeue() ?? "";
        return acc + a + b ;
    }, "")

    if(arr2.length > 0 ) {
        const remain = queue2.show().join("");
        answer += remain;
    }
    return answer;
}



function solution(str1, str2) {
    let answer = '';
    for (let i = 0; i < str1.length; i++) {
        answer += `${str1[i]}${str2[i]}`
    }
    return answer;
}

const solution = (str1, str2) => {
    let toggle = true;
    const result = [];
    const length = str1.length;
    const arr1 = [...str1];
    const arr2 = [...str2];
    for(let i=0; i<length; i++){
        result.push(arr1.shift());
        result.push(arr2.shift());
    }
    return result.join('');
}

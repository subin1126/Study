// var arr = [1, 7, 3, 10, 4, 5, -1];
// var temp = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr);

// var s = ['+', '15', '-'];
// var o1 = s[0];
// var o2 = s[s.length-1];
// s.pop();
// s.shift();
// s = s.join('');

// var num = parseInt(s);

// if(num % 5 === 0){
//     console.log(o1.repeat(num));
// } else if(num % 3 === 0){
//     console.log(o2.repeat(num));
// } else if(num%3 ===0 && num%5===0){
//     console.log('');
// } else {
//     console.log(o1.repeat(num) + o2.repeat(num));
// }

// int my_strlen(char *str) {
// 	int len;

// 	len = 0;
// 	while (str[len] != '\0')
// 		len++;
// 	return (len);
// }

function countStr(str) {

    var arr = str.split('');
    var count = 0;

    while (arr.pop()) {
        count++;
    }
    return count;
}

//let str = "H e l l o";
// let arr = str.split('');
// let count = 0;
// while(arr[0] !== undefined){
//     arr.pop();
//     count++;
// }
// console.log(count);

// let count = 0;
// let b = '';

// while(str !== b){
//     b += str[count];
//     count++;
// }
// console.log(count);

//console.log(countStr('H e l l o'));

// var a = 'a b c d e f';
// console.log(a.length);
// var bb = a.split('');
// console.log(bb);

// function countSt(str){
//     if(str === ''){
//         return 0;
//     } else {
//         return 1 + countSt(str.substring(1));
//     }
// }
// console.log(countSt('Hello'));

// function strLength(str){
//     var count = Array.from(str).reduce(function(acc){
//         return acc+1;
//     },0);
//     return count;
// }

// console.log(strLength('Hello'));

// var a = [1,2,3];
// a.pop();
// a.pop();
// a.pop();
//console.log(a);

// function rightDiamond(num) {
//     var ret = '';
//     var enter = '';
//     for (let i = 0; i < num; i++) {
//         ret += '*';
//         enter += ret + '\n';
//     }

//     var ret1 = '';
//     for (let i = num - 1; i >= 1; i--) {
//         for (let j = 1; j <= i; j++) {
//             ret1 += '*';
//             //console.log(ret1);
//         }
//         ret1 += '\n';
//     }
//     return enter + ret1;
// }
//console.log(rightDiamond(5));

function smallDiamond(num) {
    var ret = '';
    for (let i = 1; i <= num; i++) {  // 상단
        //console.log('i = '+ i, 'ret = '+ret);
        for (let j = num; j >= i; j--) { // 공백
            //console.log('j = '+j, 'ret = '+ret);
            ret += ' ';
        }
        for (let k = 1; k <= i; k++) {  // 별
            //console.log('k = '+k, 'ret = '+ret);
            ret += ' *';
        }
        ret += '\n';
    }

    for (let i = 1; i <= num; i++) {  // 하단
        //console.log('underI = '+i, 'ret = '+ret);
        for (let j = 0; j <= i; j++) {  // 공백
            //console.log('underJ = '+j, 'ret = '+ret);
            ret += ' ';
        }
        for (let k = 0; k < (num - i); k++) {  // 별
            //console.log('underK = '+k, 'ret = '+ret);
            ret += ' *';
        }
        ret += '\n';
    }
    return ret;
}

console.log(smallDiamond(4));

function bigDiamond(num) {
    var ret = '';
    for (let i = 0; i < num; i++) {
        //console.log('i = '+i, 'ret = '+ret);
        for (let j = 0; j < (num - i); j++) {
            //console.log('j = '+i, 'ret = '+ret);
            ret += ' ';
        }
        for (let k = 0; k < (2 * i + 1); k++) {
            //console.log('k = '+i, 'ret = '+ret);
            ret += '*';
        }
        ret += '\n';
    }

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            ret += ' ';
        }
        for (let k = 0; k < (2 * (num - i) + 1); k++) {
            ret += '*';
        }
        ret += '\n';
    }
    return ret;
}

console.log(bigDiamond(4));


// function makeStars(num){
//     let d = -1;
//     for(let i =0; i<num; i++){
//         d+=2;
//         console.log(' '.repeat(num-i-1));
//         '*'.repeat(d);
//     }

//     return 
// }

// console.log(makeStars(3));


var n = 3;

let spaceN = 0;
let starN = -1;

for (let i = 1; i < n * 2; i++) {
    if (i < n + 1) {
        starN += 2;
        spaceN = n - i;
    } else {
        starN -= 2;
        spaceN = i - n;
    }
    console.log(' '.repeat(spaceN) + '*'.repeat(starN));
}










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

// var str1 = 'aaaaa';
// var str2 = 'bbbbb';
// var str = '';
// for(let i = 0; i<=str1.length; i++){
//     str += (str1.charAt(i) + str2.charAt(i));
// }
// console.log(str);
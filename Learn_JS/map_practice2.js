var str1 = 'aaaaa';
var str2 = 'bbbbb';

function solution(str1, str2){
    return [...str1].map(function(x, idx){ 
        //console.log(x);
        //console.log(idx);
        console.log(x+str2[idx]);
        return x+str2[idx]
    });//.join("");
}
// [...str1].map((aaaaa, idx) =>) aaaaa+str2[idx]).join("");
//  aaaaa                                bbbbb

// var str3 = [...str1].map(function(x, idx){ 
//     //console.log(x);
//     console.log(x + idx);
//     x + str2[idx]
// });//.join("");

// console.log([...str1]);

console.log(solution(str1, str2));

//map을 for로 만들어보자!

// var numbers = [4,9,16,25,36];
// var result = numbers.map(Math.sqrt);
// console.log(result);

// var number = [1,2,3,4,5,6,7,8,9];
// var newNumbers = number.map(number => number * 2);
// console.log(newNumbers);

// var newNumber = number.map(function(number) {
//     return number*2;
// });
// console.log(newNumber);

// function doubleUp(number) {
//     return number * 2;
// }
// var newNumber2 = number.map(doubleUp);
// console.log(newNumber2);

//-- map함수는 기존의 배열을 콜백함수에 의해 새 배열을 만드는 함수이다
//기존의 배열이 변하지 않는다

// var students = [
//     {id:1, name: "james"},
//     {id:2, name: "tim"},
//     {id:3, name: "john"},
//     {id:4, name: "brian"}
// ];

// var names = students.map(student => student.name);
// console.log(names);

// var testJson = [
//     {name : "이건", salary : 50000000},
//     {name : "홍길동", salary : 1000000},
//     {name : "임신구", salary : 3000000},
//     {name : "이승룡", salary : 2000000}
// ];

// var newJson = testJson.map(function(element, index){
//     console.log(element);
//     var returnObj = {};
//     returnObj[element.name] = element.salary;
//     return returnObj;
// });
// console.log("newObj");
// console.log(newJson);

var numbers3 = [1,2,3,4,5,6];
var numbersReverse = numbers3.map(number => number * 2).reverse();
///console.log(numbersReverse);

var numbers4 = [[1,2,3],[4,5,6],[7,8,9]];
var newNumbers4 = numbers4.map(array => array.map(number => number * 2));
//console.log(newNumbers4);

var newNumbers5 = numbers4.map(function(array){
    //console.log(array);
    return array.map(function(number){
        //console.log(number);
        return number*2;
    });
});
//console.log(newNumbers5);


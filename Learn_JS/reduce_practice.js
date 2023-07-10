//배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce(
    (acc, currentNumber) => acc +currentNumber);

//console.log('sum = ', sum);

function sumReducer(acc, currentNumber){
    return acc + currentNumber;
}

const sum2 = numbers.reduce(sumReducer);

//console.log('sum2 = ', sum2);

const number = [2, 3, 4, 5];

function reducer(accumulator, currentValue, currentIndex) {
  const result = accumulator + currentValue;
  console.log('accumulator = ', accumulator, 
  ', currentValue = ', currentValue,
   ', currentIndex = ', currentIndex,
    ', result = ', result);
  return result;
}

number.reduce(reducer);

console.log("========================================")

number.reduce(reducer, 0); // 초기값 0을 지정해줌

// n보다 커질 때까지 더하기
// function solution(numbers, n) {
//   return numbers.reduce((a,c,i,t)=>(a<=n)?a+c:a)
// }
// accumulator : 누적된 결과,
// currentValue : 현재 처리 중인 요소,
// currentIndex : 현재 처리 중인 요소의 인덱스,
// array : 원본 배열

// 현재까지 누적값인 a와 현재 요소값인 c를 더하고,
// 그 결과가 n보다 작거나 같은지 확인하며, 누적값을 업데이트하고 유지함
// 최종 누적값 반환
//console.log(solution([58, 44, 27, 10, 100], 139));

const solution = num_str => [...num_str].reduce((acc, curr) => acc + Number(curr), 0)

console.log(solution('123456789')); // 45, 문자열을 정수의 합으로
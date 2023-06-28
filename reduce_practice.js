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


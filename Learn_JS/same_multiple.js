// function solution(number, n, m) {
//     return (number%n ===0) ? (number%m===0) ? 1 : 0 : 0;
// }

function solution(number, n, m) {
  return +!(number % n || number % m);
}

console.log(solution(60,2,7));
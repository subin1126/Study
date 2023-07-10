// function solution(ineq, eq, n, m) {
//     if (ineq == '>' && eq == '=') {
//         return n >= m ? 1 : 0;
//     } else if (ineq == '<' && eq == '=') {
//         return n <= m ? 1 : 0;
//     } else if(ineq == '>' && eq == '!'){
//         return n > m ? 1 : 0;
//     } else if(ineq == '<' && eq == '!'){
//         return n < m ? 1 : 0;
//     }
// }

const operations = {
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
  };
  
  function solution(ineq, eq, n, m) {
    const op = operations[ineq + eq];
    return Number(op(n, m));
  }




console.log(solution("<", "=", 20, 50)); //1
console.log(solution(">", "!", 41, 78)); //0
// function solution(numlist, n) {
//     return numlist
//         .sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
// }

// function solution(numlist, n) {
//     let arr = []
//     for(let i = 0 ; i < numlist.length ; i++){
//         arr.push([numlist[i], Math.abs(numlist[i]-n)])
//         console.log(`arr:  ${arr}`);
//     }
//     console.log(`push arr : ${arr}`);
//     arr.sort((a,b) => b[0] - a[0])
//     console.log(`arr2 : ${arr}`);
//     arr.sort((a,b) => a[1] - b[1])
//     console.log(`arr3 : ${arr}`);
//     return arr.map(el => el[0])
// }

// function solution(numlist, n) {
//     numlist.sort((a,b)=>b-a);
//     numlist.sort((a,b)=>{
//         return Math.abs(a-n) - Math.abs(b-n)
//     })
//     return numlist;
// }

function solution(numlist, n) {
    for (let i = 0; i < numlist.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < numlist.length; j++) {
        // 절대값의 차이를 비교
        if (Math.abs(numlist[j] - n) < Math.abs(numlist[minIndex] - n)) {
          minIndex = j;
        } else if (Math.abs(numlist[j] - n) === Math.abs(numlist[minIndex] - n)) {
          // 절대값의 차이가 같은 경우 기존의 내림차순 정렬을 유지하기 위해 더 큰 숫자를 선택
          if (numlist[j] > numlist[minIndex]) {
            minIndex = j;
          }
        }
      }
      // 최솟값을 현재 인덱스(i) 위치로 이동
      if (minIndex !== i) {
        const temp = numlist[i];
        numlist[i] = numlist[minIndex];
        numlist[minIndex] = temp;
      }
    }
    return numlist;
  }
  
  console.log(solution([10000,20,36,47,40,6,10,7000], 30)); // [4, 5, 3, 6, 2, 1]
  
function solution(arr, n){
    for(let i =0 ; i<arr.length; i++){
      if(arr[i] === n ){
        return 1;
      }
    }
    return 0;
  
  }
  
  console.log(solution([1,2,3,4,5], 3));

  //이거 나중에 다른 사람풀이 더 보기

function solution(s1, s2) {
    let count = 0;

    for(let i =0; i<s1.length; i++){
        for(let j=0; j<s2.length; j++){
            if(s1[i] === s2[j]){
                count++;
            }
        }
    }
    return count;
}

function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}

function solution(s1, s2) {
    const concat = [...s1, ...s2];
    const setConcat = Array.from(new Set(concat));
  
    return concat.length - setConcat.length;
  }

  function solution(s1, s2) {
    let count = 0;
    for (let v of s1) if (s2.includes(v)) count++;
    return count;
}


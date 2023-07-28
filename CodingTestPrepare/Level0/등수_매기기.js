// function solution(score){
//     let avg = score.map((item) => (item[0] + item[1])/2);
//     let sorted = [...avg].sort((a, b) => b-a);
//     return avg.map(v => sorted.indexOf(v) + 1);
// }

// function solution(score) {
//     return score.map((el) => {
//       return (
//         score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//       );
//     });
//   }

function solution(score) {
    const answer = [];
    for (const [a, b] of score) {
        const ab = (a + b) / 2;
        let cnt = 1;
        for (const [aa, bb] of score) {
            const aabb = (aa + bb) / 2;
            if (aabb > ab) cnt++;
        }
        answer.push(cnt);
    }
    return answer;
}



console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]));
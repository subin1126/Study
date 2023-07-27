// function solution(keyinput, board) {
//     let x = 0;
//     let y = 0;

//     const range = [Math.abs(Math.floor(board[0]/2)),
//                    Math.abs(Math.floor(board[1]/2))];

//     for(let move of keyinput) {
//         switch(move) {
//             case 'left': x--; break;
//             case 'right': x++; break;
//             case 'down': y--; break;
//             case 'up': y++; break;
//         }

//         console.log(Math.abs(x), range[0]);
//         console.log(Math.abs(x) > range[0]);
//         if(Math.abs(x) > range[0]) {
//             x = x>0 ? range[0] : range[0] * -1;
//         }
//         if(Math.abs(y) > range[1]) {
//             y = y>0 ? range[1] : range[1] * -1;
//         }
//     }


//     return [x, y];
// }

// function solution(keyinput, board) {
//     let res = [0,0];
//     for (let p of keyinput) {
//         switch(p){
//             case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
//             case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
//             case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
//             case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
//         }
//     }
//     return res;
// }

function solution(keyinput, board) {
    let key = {"right" : [1,0], "up" : [0,1], "down" : [0,-1], "left" : [-1,0]};


    let rslt = keyinput.map(v => key[v]).reduce((a,b) => { 
        if (Math.abs(a[0] + b[0]) > board[0]/2 || Math.abs(a[1] + b[1]) > board[1]/2) 
            return [a[0],a[1]] ; 

        return [a[0] + b[0], a[1] + b[1]];}
    , [0,0])


    return rslt;
}

function solution(keyinput, board) {
    var answer = [0, 0];

    const bndrX = (board[0] - 1) / 2;
    const bndrY = (board[1] - 1) / 2;

    keyinput.forEach(cmd => {
        switch(cmd) {
            case 'up': {
                if(answer[1] !== bndrY) answer[1]++;
                break;
            }
            case 'down': {
                if(answer[1] !== -bndrY) answer[1]--;
                break;
            }
            case 'left': {
                if(answer[0] !== -bndrX) answer[0]--;
                break;
            }
            case 'right': {
                if(answer[0] !== bndrX) answer[0]++;
                break;
            }
        }
    });

    return answer;
}



console.log(solution(["right", "right", "right", "right", "right", "left"], [9, 5]));
//console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));

//1 3 5 6 8 9 
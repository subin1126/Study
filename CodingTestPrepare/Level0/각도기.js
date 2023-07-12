// function solution(angle) {
//     if(0 < angle && angle < 90){
//         return 1;
//     } else if(angle === 90){
//         return 2;
//     } else if(90 < angle && angle < 180){
//         return 3;
//     } else if(angle === 180){
//         return 4;
//     }
// }


function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}

function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

function solution(angle) {
    switch(angle) {
        case 90: return 2;
        case 180: return 4;
        default:
            return angle > 0 && angle < 90 ? 1 : 3;
    }
}



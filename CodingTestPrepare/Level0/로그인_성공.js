// function solution(id_pw, db) {
//     let ans = '';
//     db.map((item, i) => {
//         if(id_pw[0] === item[0] && id_pw[1] === item[1]) ans= 'login';
//         else if(id_pw[0] === item[0] && id_pw[1] !== item[1]) ans= 'wrong pw';
//         else if(id_pw[0] !== item[0] && id_pw[1] !== item[1]) ans= 'fail';
//     });
//     return ans;
// }

// function solution(id_pw, db) {
//     const [id, pw] = id_pw;
//     const map = new Map(db);
//     console.log(map);
//     return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
//   }

// function solution(id_pw, db) {
//     db = db.filter(v=>v[0]===id_pw[0]);
//     console.log(db);
//     if (!db.length) return 'fail';

//     for (let d of db) if (d[1] === id_pw[1]) return 'login';

//     return 'wrong pw';
// }

// function solution(id_pw, db) {
//     const [ userId, userPw ] = id_pw;
//     for (const [ dbId, dbPw ] of db) {
//         if (userId === dbId && userPw === dbPw) return "login";
//         else if (userId === dbId && userPw !== dbPw) return "wrong pw";
//     }
//     return "fail";
// }

function solution(id_pw, db) {
    for(let i = 0; i < db.length; i++){
        if(id_pw[0] === db[i][0]){
            if(id_pw[1] === db[i][1]) return "login";
            return "wrong pw";
            break;
        }
    }
    return "fail";
}

console.log(solution(["rabbit04", "1234"], [["rabbit04", "1234"], ["rabbit0", "1234"], ["rabbit0", "123"]]));


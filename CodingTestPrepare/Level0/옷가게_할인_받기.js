// function solution(price) {
//     if(price >= 500000){
//         return price - Math.ceil(price*0.2);
//     } else if(price >= 300000){
//         return price - Math.ceil(price*0.1);
//     } else if(price >= 100000){
//         return price - Math.ceil(price*0.05);
//     } else {
//         return price;
//     }
//}

const discounts = [
    [500000, 20],
    [300000, 10],
    [100000,  5],
]

const solution = (price) => {
    for (const discount of discounts)
        if (price >= discount[0]){
            console.log(discount[1])
            return Math.floor(price - price * discount[1] / 100)}
    return price;
}

// function solution(price) {

//     let arr_discount = [[500000, 0.2], [300000, 0.1], [100000, 0.05]]

//     for(let i = 0 ; i < arr_discount.length ; i++)
//         if(arr_discount[i][0] <= price) return Math.trunc(price * (1-arr_discount[i][1]))        

//     return price
// }

// function solution(price) {
//     price = price>=500000?price*0.8:price>=300000?price*0.9:price>=100000?price*0.95:price;
//     return ~~(price);
// }



console.log(solution(50000));
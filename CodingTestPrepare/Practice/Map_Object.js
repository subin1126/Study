const arr = ["rabbit04", "1234"] 
const arr1 = [["rabbit0", "124"], ["rabbit0", "12"], ["rabbit04", "1234"]];

const map = new Map(arr1);

console.log(map.get(arr[0]) === arr[1]);

console.log(map.get(arr[0]));
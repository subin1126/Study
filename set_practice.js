const set = new Set();
console.log(set);

const set1 = new Set([1,2,3,3]);
console.log(set1);

const set2 = new Set('hello');
console.log(set2);

const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2,1,2,3,4,3,4]));

const uniq1 = arr => [...new Set(arr)];
console.log(uniq([2,1,2,3,4,3,4]));

const set3 = new Set([1,2,3]);
console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));

set3.size = 10; //무시된다
console.log(set3.size);

const set4 = new Set();

set.add(1).add(2).add(2);
console.log(set);

const set5 = new Set();
set5
   .add(1)
   .add('a')
   .add(true)
   .add(undefined)
   .add(null)
   .add({})
   .add([]);

console.log(set5);

const set6 = new Set([1,2,3]);

console.log(set6.has(2));
console.log(set6.has(4));

const set7 = new Set([1,2,3]);

console.log(set7.delete(2));
console.log(set7);
console.log(set7.delete(1));
console.log(set7);

//const set8 = new Set([1,2,3]);
// 에러 발생 : console.log(set8.delete(1).delete(2));
//delete는 불리언 값을 반환하기 때문에 여러개 붙여서 사용못함

const set9 = new Set([1,2,3]);

console.log(set9.clear());
console.log(set9);

const set10 = new Set([1,2,3]);

set10.forEach((v, v2, set) => console.log(v, v2, set));

const set11 = new Set([1,2,3]);
//Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다
console.log(Symbol.iterator in set11);

//이터러블인 Set 객체는 for...of 문으로 순회할 수 있다
for (const value of set11){
    console.log(value);
}

//이터러블인 Set 객체는 스프레드 문법의 대상이 될 수 있다
console.log([...set11]);

//이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다
const [a, ...rest] = [...set11];
console.log(a, rest);

const set12 = new Set([1,2,3,4,5,6,7,8,9,10]);

const [b,c,d,e, ...rest1] = [...set12];
console.log(b,c,d,e, rest1);



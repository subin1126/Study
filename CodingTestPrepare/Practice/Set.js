// Set은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션이다 자료구조
// 키가 없는 값이 저장된다

let set = new Set(["banana", "apple", "banana",  "orange", "apple"]);

console.log(set); // 3

let set1 = new Set();

let john = { name : "John" };
let kim = { name : "Kim" };
let park = { name : "Park" };

set1
    .add(john)
    .add(park)
    .add(john)
    .add(kim)
    .add(park)
//console.log(set1.size); // 3

for (let user of set1) {
    //console.log(user.name); //John Park Kim : add된 순서대로
}

let set2 = new Set(["foo", "bar", "foong", "baaar", "bar", "foo"]);

//set2에 있는 각 요소를 순회
for(let value of set2) console.log(value + 1);

//forEach 메서드를 사용하여 set2 각 요소 순회
//set2에 있는 각 요소를 value 변수에 저장하고,
//콜백 함수를 실행하여 각 요소를 출력한다
//valueAgain과 set2는 forEach 메서드에서 제공되는 두 가지 추가적인 매개변수
//valueAgain은 현재 순회 중인 값과 동일한 값을 가리키며,
//set2는 순회 중인 Set 객체 자체를 가리킨다
//Set은 순서가 보장되지 않는 자료구조이기 때문에 각 요소를 순회하는 순서는 임의로 결정됨
set2.forEach((value, valueAgain, set2) => {console.log(value)});

// new Set(iterable)
// - 셋을 만든다 : 이터러블 객체를 전달받으면(대개 배열을 전달받음)
//                그 안의 값을 복사해 셋에 넣어준다

// set.add(value)
// - 값을 추가하고 셋 자신을 반환한다
// - set내에 동일한 값이 있다면 아무리 많이 호출해도 반응없다

// set.delete(value)
// - 값을 제거한다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false

// set.has(value)
// - 셋 내에 값이 존재하면 true, 아니면 false 반환

// set.clear()
// - 셋을 비운다

// set.size
// - 셋에 몇 개의 값이 있는지 세준다

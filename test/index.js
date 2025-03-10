// console.log("자카");


// console.log(y);
// let y = 1006;
// y = { name: "jaka", age: 3 };
// console.log(y)

// const z = 2;
// z = 3;
// console.log(z)

// 원시 타입 : 값 그 자체를 넣는거야
// number, string, boolean(true/false), symbol, bigint
let x = 2;
const y = '2';
// console.log(x == y);
// console.log(x === y);

// 참조 타입 : 메모리 주소를 참조해
// function, array, object
const object1 = { name: 'jaka' };
const object2 = { name: 'jaka' };
console.log(object1 == object2);

object1.age = 32;

console.log(object1);

// 원시타입과 참조타입 
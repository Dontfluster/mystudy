// let a = 1;
// let b = "1";
// let c = "안녕1";

// console.log(a == b); // true false
// console.log(a === b); // true false
// console.log(a + a);
// console.log(b + c);

// 데이터타입
// 원시타입 : 숫자, 문자, boolean, null, undefined, (symbol, bigint)
// 참조타입 : 함수 배열 객체

// 이게 원시타입
// let a = 33;
// let b = 33;
//
// let c = "안녕";
// let d = "안녕";
// console.log(c === d);

/// 참조 타입
// let array1 = [0]
// let array2 = [0]

// console.log(array1);
// console.log(array2);
// console.log(array1 === array2)

// 깊은복사 / 얕은복사 (찾아보기)

console.log(10 + 5);
console.log(10 + "5");
console.log(10 * "아"); // NaN => Not a Number
console.log(10 * "5");


// 단항 연산자 num++, num--
// i+=2 / i-=2

let num2 = 0

num2 = num2 + 2 // num2 += 2

for (let i = 0; i < 5; i += 2) {
    console.log(i);

}
let num = 0;

console.log(num);

num++;

console.log(num);

num++;

console.log(num);

num--;

console.log(num)


console.log("====================================")
// 변수 표기법

let n1 = 1;
let n2 = 2;

console.log(!(n1 !== n2))

let boolean1 = true;
console.log(!boolean1)
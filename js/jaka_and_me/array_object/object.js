// 터미널에 값 출력 하는 법 node object 엔터터
const jidoong = {
    address: "인천",
    age: 40,
    hobby: 'bowling',
    cat: ['복길', '담담', '산'],
    "favorite-bevarage": "아메리카노노",
    log: () => { },
}

console.log(typeof jidoong);
// 객체 {key: value}
// 객체에 value에 값을 가져오는 두가지 방법
// 점(.) 표기법 : 지둥이라는 객체에 address라는 키값을 넣고 그에 해당하는 밸류(값) 인천을 호출
// 대괄호[] 표기법 : 객체 뒤에 대괄호를 넣고 그 안에 키값을 넣어주면 그에 해당하는 값을 호출
// ps. 기값에 문자열(따옴표)로 사용하지 않으면 에러 발생생

console.log(jidoong.address);
console.log(jidoong.age);
console.log(jidoong.hobby);
console.log(jidoong.cat);

console.log(jidoong["favorite-bevarage"])
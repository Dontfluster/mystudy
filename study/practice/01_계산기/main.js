//1. 박스 2개 만들기
//2. 드랍다운 리스트 만들기
//3. 환율정보 들고오기
//4. 드랍다운 리스에서 아이템 선택하면 아이템이 바뀜
//5. 금액을 입력하면 환전이 된다.
//6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 된다.
//7. 숫자를 한국어로 읽는법 
//8. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 됟나.


let currencyRatio = {
    USD: {
        KRW: 1453.40,
        USD: 1,
        VND: 25544.82,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0,
        VND: 17.57,
        unit: "원"
    },
    VND: {
        KRW: 0.06,
        USD: 0,
        VND: 1,
        unit: "동"
    }
};

//초기값 선언
let fromCurrency = "USD";
let toCurrency = "USD";
//1. console.log(currencyRatio.USD.unit)
//2. console.log(currencyRatio["VND"]["unit"])


// document.querySelectorAll("#from-currency-list a")
// querySelectorAll 여러개 선택해줌(다른선택자들은 만족하는것 하나만 선택해줌)
document.querySelectorAll("#from-currency-list a").forEach(menu => menu.addEventListener("clik", function () {
    //1. 버튼을 가져온다.
    //2. 버튼의 값을 바꾼다.
    document.getElementById("from-button").textContent = this.textContent;
    //3. 선택된 currency값을 저장해준다.
    fromCurrency = this.textContent;
})
);

document.querySelectorAll("#to-currency-list a").forEach(menu => menu.addEventListener("clik", function () {
    //1. 버튼을 가져온다.
    //2. 버튼의 값을 바꾼다.
    document.getElementById("to-button").textContent = this.textContent;
    //3. 선택된 currency값을 저장해준다.
    toCurrency = this.textContent;
})
);


document.querySelectorAll("#to-currency-list a").forEach(menu => menu.addEventListener("clik", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
})
);

# html & css
HTML : Hyper text markup language - 일종의 문서인데 링크로 데이터의 구조로 문서 ( 뼈대 )<BR>
자바스크립트 - 기능을 수행해주는 역할을 한다. 
html 라인과 블로그의 개념<BR>
기타 : md 확장자는 텍스트 서식 지정을 위한 간단한 문법을 가진 경량 마크업 언어인 Markdown을 나타낸다. Markdown은 GitHub에서 전달력 있는 README 파일을 만들 수 있는 매우 간단한 언어이다.
## 인라인: 담은 내용물에 따라 크기가 정해지는 것을 의미하고
 - 높이와 너비를 지정할 수 없어
 - 옆으로 나열되는 특징이 있다
## 블록 : 
- 힌줄을 차지
- 너비와 높이를 지정 됨
- 아래로 나열되는 특징있음


## 자주쓰이는 태그(html 태그랭킹 검색)
블록
1. div : 구역 나날 때
2. p : 문단을 나눌때
3. ol(순서가 필요한), ul(순서가 필요없는), li(ol li 안에쓰는) : 리스트를 표현할 때 사용
4. form : 데이터를 전달 할 때 쓰는 태그
5. h1~h6 : 제목의 영역
```html
<ol>
    <li>1</Li>
    <li>2</Li>
    <li>3</Li>
</ol>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
```

인라인
1. span
2. b : bold
3. strong / i : 웹접근성 검색
4. img : 이미지
5. button 
6. a : 주소를 이동해준다.(사이트에 요청해서 네이버가 자료를 보여만 주는것)
- ./ 현재폴더, ../ 상위폴더
7. form ( input, label ) : 데이터를 전달 할 때 쓰는 태그 
- action(전송한 데이터를 벡엔드에 보내는 요청만하는 것)

- method
get : 민감하지않은 정보
post : 민감한 정보
5. input, label : input은 값을 입력하는것 / label 이름을 표기
(input의 id, name과 label의 for 속성의 이름을 같이 )
6. 가운데 정렬(flex,float,greed)

###이제 레이아웃을 짜보자!!
우리가 써볼 css속성은 float와 flex를 써볼 것이다.



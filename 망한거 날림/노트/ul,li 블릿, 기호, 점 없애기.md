## HTML CSS 에서 ul li 블릿, 기호, 점 없애기 


li 태그를 사용하게 되면 기본적으로 불릿이 생성이 된다.
예> 불릿 사용
<ul>
  <li>안녕하세요.</li>
  <li>블로그입니다.</li>
</ul>
결과>
  ● 안녕하세요.
  ● 블로그입니다.

예> 불릿 없애기
<style>
ul{
   list-style:none;
   }
</style>
결과>
     안녕하세요.
     블로그입니다.

예> 불릿 없애기 + 들여쓰기 없애기
<style>
ul{
   list-style:none;
   padding-left:0px;
   }
</style>
결과>
안녕하세요.
블로그입니다.

추가팁

<head>
<STYLE type='text/css'>
li.1 { list-style-type : lower-roman } /* 로마숫자 소문자으로된 목록 */
li.2 { list-style-type : upper-roman } /* 로마숫자 대문자으로된 목록 */
li.3 { list-style-type : lower-alpha } /* 알파벳 소문자으로된 목록 */
li.4 { list-style-type : upper-alpha } /* 알파벳 대문자으로된 목록 */
li.5 { list-style-type : disc } /* 점으로 된 목록 */
li.6 { list-style-type : circle } /* 속이 하얀색 원으로 된 목록 */
li.7 { list-style-type : square } /* 사각형으로 된 목록 */
li.8 { list-style-type : decimal } /* 숫자로 된 목록 */
li.9 { list-style-type : none } /* 아무 표시 없음 */
</STYLE>
</head>

리스트 태그(ul, ol, li)와 같은 기능을 CSS로 만들기.(list-style-type)
<ol>
<LI class='1'>리스트 항목 lower-roman</LI>
<LI class='2'>리스트 항목 upper-roman</LI>
<LI class='3'>리스트 항목 lower-alpha</LI>
<LI class='4'>리스트 항목 upper-alpha</LI>
<LI class='5'>리스트 항목 upper-alpha</LI>
<LI class='6'>리스트 항목 disc</LI>
<LI class='7'>리스트 항목 circle</LI>
<LI class='8'>리스트 항목 square</LI>
<LI class='9'>리스트 항목 none</LI>
</ol>
출처: https://biju.tistory.com/256 [에헤라디야~:티스토리]
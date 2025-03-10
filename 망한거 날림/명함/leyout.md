HTML과 CSS를 사용하여 웹 페이지 레이아웃 만들기

## 기본 구조 만들기

- 헤더 (Header)
- 내비게이션 (Navigation)
- 메인 콘텐츠 (Main Content)
- 사이드바 (Sidebar)
- 푸터 (Footer)

```html
<body>
  <header>헤더</header>
  <nav>내비게이션</nav>
  <main>
    <article>메인 콘텐츠</article>
    <aside>사이드바</aside>
  </main>
  <footer>푸터</footer>
</body>
```

## CSS로 레이아웃 스타일링

HTML 구조를 만든 후, CSS를 사용하여 레이아웃을 스타일링합니다. 여기서는 두 가지 주요 레이아웃 기술인 Flexbox와 Grid를 사용한 예시를 보여드리겠습니다.

### Flexbox 사용하기

Flexbox는 1차원 레이아웃을 만드는 데 적합합니다[1].

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  display: flex;
  flex: 1;
}

article {
  flex: 3;
}

aside {
  flex: 1;
}
```

### Grid 사용하기

Grid는 2차원 레이아웃을 만드는 데 더 적합합니다[2].

```css
body {
  display: grid;
  grid-template-areas:
    "header header"
    "nav nav"
    "main sidebar"
    "footer footer";
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
}

header { grid-area: header; }
nav { grid-area: nav; }
main { grid-area: main; }
aside { grid-area: sidebar; }
footer { grid-area: footer; }
```

## 반응형 레이아웃

미디어 쿼리를 사용하여 화면 크기에 따라 레이아웃을 조정할 수 있습니다:

```css
@media (max-width: 768px) {
  body {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

## 팁과 모범 사례

1. **모바일 퍼스트**: 모바일 레이아웃부터 시작하여 점진적으로 데스크톱 레이아웃으로 확장하세요.

2. **유연한 단위 사용**: 픽셀 대신 %, em, rem 등의 상대적 단위를 사용하여 유연한 레이아웃을 만드세요.

3. **CSS 재설정**: 브라우저 간 일관성을 위해 CSS 재설정을 사용하세요.

4. **컨테이너 사용**: 최대 너비를 제한하는 컨테이너를 사용하여 넓은 화면에서도 콘텐츠를 읽기 쉽게 만드세요.

5. **시맨틱 HTML**: 의미 있는 HTML 태그를 사용하여 접근성과 SEO를 개선하세요.

이러한 기술과 팁을 활용하면 다양한 디바이스와 화면 크기에 적응하는 유연하고 효과적인 웹 페이지 레이아웃을 만들 수 있습니다[1][2][5].

Citations:
[1] https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Introduction
[2] https://codingbroker.tistory.com/117
[3] https://www.jotform.com/blog/css-layouts-40-tutorials-tips-demos-and-best-practices/
[4] https://www.youtube.com/watch?v=Yic2KxxqXJk
[5] https://codepen.io/mjkim/pen/xLdhG
## 자바스크립트에서 꼭 알아둬야 할 이론 및 실습 요소 정리

자바스크립트는 웹 개발의 핵심 언어이며, 프론트엔드뿐만 아니라 백엔드(Node.js), 모바일 앱 개발(React Native), 데스크톱 앱 개발(Electron) 등 다양한 분야에서 활용됩니다. 따라서 탄탄한 기본기를 갖추는 것이 중요합니다. 다음은 자바스크립트 학습 시 꼭 알아둬야 할 이론 및 실습 요소를 정리한 것입니다.

**I. 기본 문법 및 자료형**

* **이론:**
    * **변수 선언 (var, let, const):** 각 키워드의 특징과 스코프 이해
    * **자료형:**
        * **원시 타입 (Primitive Types):** Number, String, Boolean, Null, Undefined, Symbol, BigInt
        * **참조 타입 (Reference Types):** Object, Array, Function
    * **연산자:**
        * 산술 연산자 (+, -, \*, /, %)
        * 할당 연산자 (=, +=, -=, ...)
        * 비교 연산자 (==, ===, !=, !==, >, <, >=, <=)
        * 논리 연산자 (&&, ||, !)
        * 삼항 연산자 (? :)
        * typeof 연산자
    * **조건문 (if, else if, else, switch):** 프로그램의 흐름 제어
    * **반복문 (for, while, do...while, for...in, for...of):** 특정 코드를 반복적으로 실행
    * **함수 (Function):**
        * 함수 선언식과 함수 표현식
        * 매개변수 (Parameters)와 인자 (Arguments)
        * return 키워드
        * 스코프 (Scope): 전역 스코프, 지역 스코프, 블록 스코프
        * 클로저 (Closure) 개념 이해
        * this 키워드 이해
        * 화살표 함수 (Arrow Function)
* **실습:**
    * 다양한 자료형의 변수를 선언하고 값을 할당해보세요.
    * 각종 연산자를 사용하여 변수의 값을 조작해보세요.
    * if/else, switch 문을 사용하여 조건에 따른 다른 코드를 실행해보세요.
    * for, while 등의 반복문을 사용하여 배열 또는 특정 횟수만큼 코드를 반복 실행해보세요.
    * 여러 가지 형태의 함수를 정의하고 호출해보세요.
    * 스코프 규칙과 클로저의 동작 방식을 코드로 확인해보세요.
    * 다양한 상황에서 `this` 키워드가 어떻게 바인딩되는지 예제를 통해 이해해보세요.

**II. 객체 (Object)와 배열 (Array)**

* **이론:**
    * **객체 (Object):**
        * 리터럴 표기법 ({})
        * 속성 (Properties)과 메서드 (Methods)
        * 접근 방법 (점 표기법, 대괄호 표기법)
        * 객체 순회 (for...in)
        * 객체 생성자 함수 (Constructor Function)
        * 클래스 (Class) 기본 개념 (ES6+)
    * **배열 (Array):**
        * 리터럴 표기법 ([])
        * 인덱스 (Index)
        * length 속성
        * 배열 메서드 (push, pop, shift, unshift, slice, splice, concat, join, split, map, filter, reduce, forEach 등)
        * 배열 순회 (for, for...of, forEach)
* **실습:**
    * 다양한 속성과 메서드를 가진 객체를 생성하고 접근해보세요.
    * 객체 순회를 통해 속성들을 출력해보세요.
    * 생성자 함수 또는 클래스를 사용하여 객체를 생성해보세요.
    * 배열을 생성하고 다양한 배열 메서드를 사용하여 요소를 추가, 삭제, 수정, 검색해보세요.
    * map, filter, reduce 등의 고차 함수를 사용하여 배열을 조작해보세요.

**III. 비동기 처리 (Asynchronous Programming)**

* **이론:**
    * **동기 (Synchronous) vs 비동기 (Asynchronous) 방식 이해**
    * **콜백 함수 (Callback Function):** 비동기 작업 완료 후 실행되는 함수
    * **프로미스 (Promise):** 비동기 작업의 결과를 나타내는 객체 (Pending, Fulfilled, Rejected)
        * `then()`, `catch()`, `finally()` 메서드
        * 프로미스 체이닝 (Promise Chaining)
        * `Promise.all()`, `Promise.race()` 등
    * **async/await:** 프로미스를 더욱 간결하게 사용할 수 있도록 ES8에서 도입된 문법
* **실습:**
    * `setTimeout()` 함수를 사용하여 비동기 동작을 시뮬레이션하고 콜백 함수를 실행해보세요.
    * `Promise` 객체를 생성하고 `resolve`, `reject`를 사용하여 비동기 작업의 성공과 실패를 처리해보세요.
    * `then`, `catch`, `finally`를 사용하여 프로미스의 결과를 처리하고 에러를 핸들링해보세요.
    * `async` 함수를 정의하고 `await` 키워드를 사용하여 비동기 코드를 동기 코드처럼 작성해보세요.
    * 여러 개의 비동기 작업을 `Promise.all()` 또는 `Promise.race()`를 사용하여 처리해보세요.

**IV. DOM (Document Object Model) 조작**

* **이론:**
    * **DOM 트리 구조 이해:** HTML 문서를 객체 모델로 표현
    * **DOM 요소 선택:**
        * `getElementById`, `getElementsByClassName`, `getElementsByTagName`
        * `querySelector`, `querySelectorAll`
    * **DOM 요소 조작:**
        * 요소 생성 (`createElement`)
        * 요소 추가 (`appendChild`, `insertBefore`)
        * 요소 삭제 (`removeChild`)
        * 속성 변경 (`getAttribute`, `setAttribute`)
        * 스타일 변경 (`style` 속성)
        * 클래스 조작 (`classList`)
        * 텍스트 및 HTML 콘텐츠 변경 (`textContent`, `innerHTML`)
* **실습:**
    * HTML 파일을 만들고 자바스크립트를 사용하여 DOM 요소를 선택해보세요.
    * 새로운 DOM 요소를 생성하고 HTML 문서에 추가해보세요.
    * 기존 DOM 요소의 속성, 스타일, 클래스, 콘텐츠를 동적으로 변경해보세요.
    * 이벤트 리스너를 등록하여 사용자의 인터랙션에 반응하도록 만들어보세요.

**V. 이벤트 처리 (Event Handling)**

* **이론:**
    * **이벤트 흐름 (Event Flow):** 캡처링 (Capturing) 단계, 타겟 (Target) 단계, 버블링 (Bubbling) 단계 이해
    * **이벤트 리스너 등록:** `addEventListener`, `onclick` 등
    * **이벤트 객체 (Event Object):** 이벤트 타입, 타겟 요소, 이벤트 발생 위치 등 정보
    * **이벤트 위임 (Event Delegation):** 부모 요소에 이벤트 리스너를 등록하여 자식 요소의 이벤트를 처리하는 방식
    * **기본 이벤트 동작 방지 (`preventDefault`)**
    * **이벤트 전파 방지 (`stopPropagation`)**
* **실습:**
    * 다양한 HTML 요소에 이벤트 리스너를 등록하고 이벤트 발생 시 특정 동작을 수행하도록 만들어보세요.
    * 이벤트 객체의 속성을 확인하고 활용해보세요.
    * 이벤트 위임 패턴을 사용하여 효율적으로 이벤트를 처리해보세요.
    * 폼 제출, 링크 클릭 등 기본 이벤트 동작을 방지해보세요.
    * 이벤트 전파를 제어하여 원하는 동작만 실행되도록 만들어보세요.

**VI. 웹 API 활용**

* **이론:**
    * **브라우저 내장 API:**
        * `window` 객체 (타이머 함수, location, history 등)
        * `document` 객체 (DOM 조작)
        * `navigator` 객체 (브라우저 정보)
        * `localStorage`, `sessionStorage` (데이터 저장)
        * `fetch` API (HTTP 요청)
        * `Geolocation` API (위치 정보)
        * `Canvas` API (그래픽)
        * `WebSockets` (실시간 통신)
    * **Node.js API (백엔드 개발 시):**
        * `fs` (파일 시스템)
        * `http` (HTTP 서버)
        * `path` (경로 조작) 등
* **실습:**
    * `setTimeout`, `setInterval`을 사용하여 특정 시간 간격으로 코드를 실행하거나 지연시켜 실행해보세요.
    * `localStorage` 또는 `sessionStorage`에 데이터를 저장하고 불러와보세요.
    * `fetch` API를 사용하여 외부 API에 데이터를 요청하고 응답을 처리해보세요.
    * 간단한 그림판이나 위치 정보를 활용하는 웹 페이지를 만들어보세요.

**VII. ES6+ 문법**

* **이론:**
    * **화살표 함수 (Arrow Functions)**
    * **클래스 (Classes)**
    * **모듈 (Modules):** `import`, `export`
    * **구조 분해 할당 (Destructuring Assignment)**
    * **스프레드 연산자 (Spread Operator)**
    * **템플릿 리터럴 (Template Literals)**
    * **향상된 객체 리터럴 (Enhanced Object Literals)**
    * **Promise, async/await (비동기 처리)**
    * **Iterator와 Generator**
    * **Set과 Map**
* **실습:**
    * ES6+ 문법을 활용하여 기존 코드를 리팩토링해보세요.
    * 모듈 시스템을 사용하여 코드를 분리하고 관리해보세요.
    * 구조 분해 할당을 사용하여 객체나 배열에서 필요한 값만 추출해보세요.
    * 스프레드 연산자를 사용하여 배열이나 객체를 복사하거나 병합해보세요.

**VIII. 예외 처리 (Error Handling)**

* **이론:**
    * **try...catch...finally 구문 이해**
    * **Error 객체**
    * **Custom Error 생성**
    * **Uncaught Exception 처리**
* **실습:**
    * 예상되는 에러 발생 상황을 `try...catch` 블록으로 감싸고 에러를 처리해보세요.
    * `finally` 블록을 사용하여 에러 발생 여부와 관계없이 항상 실행되어야 하는 코드를 작성해보세요.
    * Error 객체의 속성을 확인하고 활용해보세요.
    * 자신만의 에러 객체를 만들어 던져보세요.

**IX. 테스팅 (Testing) 기초**

* **이론:**
    * **테스팅의 중요성 이해**
    * **단위 테스트 (Unit Testing)**
    * **통합 테스트 (Integration Testing)**
    * **테스팅 프레임워크 (Jest, Mocha 등) 기본 개념**
* **실습:**
    * 간단한 함수에 대한 단위 테스트 코드를 작성해보세요.
    * 테스팅 프레임워크의 기본적인 사용법을 익혀보세요.

**X. 개발 도구 활용**

* **이론:**
    * **브라우저 개발자 도구 (Chrome DevTools, Firefox Developer Tools 등):** Elements, Console, Sources, Network, Application 탭 활용
    * **코드 편집기 (VS Code, Sublime Text, Atom 등) 사용법:** 단축키, 디버깅 기능
    * **Git 및 버전 관리 시스템 기본 개념**
* **실습:**
    * 브라우저 개발자 도구를 사용하여 HTML 구조, CSS 스타일, JavaScript 오류, 네트워크 요청 등을 확인해보세요.
    * 코드 편집기의 디버깅 기능을 사용하여 JavaScript 코드를 단계별로 실행하고 변수 값을 확인해보세요.
    * Git을 사용하여 코드 변경 사항을 기록하고 관리하는 기본적인 흐름을 익혀보세요.

**학습 방법:**

* **이론 학습과 함께 반드시 실습을 병행하세요.** 직접 코드를 작성하고 실행해보는 것이 이해도를 높이는 가장 좋은 방법입니다.
* **다양한 예제를 찾아보고 스스로 만들어보세요.**
* **온라인 강의, 튜토리얼, 문서 등을 활용하여 학습 내용을 보충하세요.**
* **질문하는 것을 두려워하지 마세요.** 스택 오버플로우, 커뮤니티 등에 질문하여 막히는 부분을 해결하세요.
* **꾸준히 학습하고 복습하는 것이 중요합니다.**

이 목록은 자바스크립트 학습의 중요한 부분을 포괄하고 있습니다. 이 요소들을 꾸준히 학습하고 실습한다면 자바스크립트 개발 역량을 크게 향상시킬 수 있을 것입니다. 꾸준히 노력하세요!
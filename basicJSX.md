- JSX = JavaScript의 확장 문법 (JavaScript + XML)
- HTML과 굉장히 흡사한 구조
- 컴포넌트의 첫 글자는 무조건 대문자여야 함.
  > 소문자일 경우 React와 JSX는 HTML태그라고 읽을 것임.
- 브라우저가 JSX를 이해할 수 있게 설치해줘야 함.(babel)
  > <script src="//unpkg.com/@babel/standalone/babel.min.js"></script>
  > <script type="text/babel">
  >  {/* JSX 구문 내용 */} 
  > </script>

**JSX식 표현방법 (EASY ver.)**

```
const name =
<html태그
// id, class, style, event listner = { () => 함수}
// 위와 같은 props를 넣으면 됨
>
content
</html태그>
```

</br>

**컴포넌트 생성 방식**

- 두 코드는 같은 코드임. 선택 해서 사용하면 됨.
- 아래 두 방식을 사용하지 않으면 그것음 일반적인 JavaScript 표현식임.
- 두 방식을 사용해야 JSX의 컴포넌트로 사용이 가능함.

```
// arrow function (이걸 더 선호)
const title = () => (
      <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        hello
      </h3>
    );

//function을 만들어 return 시켜줌
    function title() {
      return (
        <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
          hello
        </h3>
      );
    }
```

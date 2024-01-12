# React의 기본

- JSX = JavaScript의 확장 문법 (JavaScript + XML)
- HTML과 굉장히 흡사한 구조
- 컴포넌트의 첫 글자는 무조건 대문자여야 함.
  > 소문자일 경우 React와 JSX는 HTML태그라고 읽을 것임.
- 브라우저가 JSX를 이해할 수 있게 설치해줘야 함.(babel)
  > <script src="//unpkg.com/@babel/standalone/babel.min.js"></script>
  > <script type="text/babel">
  >  {/* JSX 구문 내용 */} 
  > </script>

</br>

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

### 컴포넌트 생성 방식

- 두 코드는 같은 코드임. 선택 해서 사용하면 됨.
- 아래 두 방식을 사용하지 않으면 그것음 일반적인 JavaScript 표현식임.
- 두 방식을 사용해야 JSX의 컴포넌트로 사용이 가능함.

`arrow function (이걸 더 선호)`

```
    const title = () => (
      <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        hello
      </h3>
    );
```

`function을 만들어 return 시켜줌`

```
    function title() {
      return (
        <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
          hello
        </h3>
      );
    }
```

</br>

**예제 코드**

```
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <script type="text/babel">
    const root = document.getElementById("root");

    const Title = () => (
      <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        hello
      </h3>
    );

    // 하지만 결국 브라우저가 이 JSX 코드를 읽을 수 있게 하려면 아래 주석 코드처럼 변환해줘야함
    // 이것이 BABEL.
    /*
     const span = React.createElement(
        "span",
        {
        onMouseEnter : () => console.log("mouse enter"),
        },
        "hello"
    );
    */

    function Button() {
      return (
        <button
          id="btn"
          onClick={() => console.log("clicked")}
          style={{ background: "tomato" }}
        >
          Click!
        </button>
      );
    }
    /*
    const btn = React.createElement(
        "button",
        {
        id : "btn",
        onClick : () => console.log("clicked"),
        style : {
            backgroundColor : "tomato"
        }
        },
        "Click me!"
    );
    */

    const Container = () => (
      <div>
        <Title /> {/* Title 컴포넌트를 복붙 한 것과 같음 */}
        <Button />
      </div>
    );
    // const div = React.createElement("div", null, [title, button]);

    ReactDOM.render(<Container />, root);
  </script>
</html>

```

</br>
</br>

# State

-
-

</br>

**State를 활용한 클릭 Counter**

- **(중요)**javaScript와 다른 점은 js는 body와 child인 span 부분 전체를 업데이트 하지만, ReactJS는 바뀐 부분만 업데이트 해줌.
  > 정말 중요한 부분이야 적은 부분을 수정 한다는 것은 그만큼 오류를 잡아내기도 쉽고 코드 전체가 아닌 부분을 수정하면 된다는 것.

`방법 1. (변수 count가 바뀔 때마다 리렌더링 하는 방법)`

```
<script type="text/babel">
    const root = document.getElementById("root");
    let count = 0;
    function countUp() {
      count++;
      render();
      // count의 변화를 바로 리렌더링해줌.
      // 하지만 여기서 문제는 버튼을 클릭 할 때마다 계속해서 리렌더링 된다는 것.
    }

    function render() {
      ReactDOM.render(<Container />, root);
      // Container 컴포넌트를 root에 담아주는 역할.
    }

    function Container() {
      return (
        <div>
          <h3>클릭 수 : {count}</h3>
          <button onClick={countUp}>Click!</button>
        </div>
      );
    }

    render();
  </script>
```

`방법 2. (가장 좋은 방법)`

```

```

</br>

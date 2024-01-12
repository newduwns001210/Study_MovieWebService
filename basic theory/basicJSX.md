# 1. ReactJS 설치 방법

- JS의 react, react-dom 두 코드를 import 해야 함.
- html script:src에 두 url 추가
  > react : https://unpkg.com/react@17.0.2/umd/react.production.min.js
  > react-dom : https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js
- react는 구동하는 엔진 같은 것.
- react-dom은 React Element들을 html body에 둘 수 있도록 해줌.
- 개발자 도구에서 React 타이핑으로 정상적으로 import 되었는지 확인.

**코드**

```
<!DOCTYPE html>
<html>
<body></body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
</html>
```

<br/>
<br/>

# 2. ReactJS로 Element 생성 방법 (hard)

- 실무 개발자들이 작업하는 방식이 아님.
- easy.ver을 배우면 다시는 쓰지 않을 방식.
- 여기서 ReactJS 파워의 핵심이 나오는데 js로 시작해 그 안에 html이 들어가고 끝나는 방식.
- const btn = React.createElement("button", null, "Click me!")

**코드**

```
<!DOCTYPE html>
<html>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
    const root = document.getElementById("root");
    const span = React.createElement(
        "span",
        {id:"sexy-span"},
        "hello"
        );
    // element span에 property를 여기서 같이 생성할 수 있음. 예를 들어 class, id, content(내용)등
    ReactDOM.render(span, root);
    // ReactDOM은 span을 어디에 둘 것인지 알려줘야 함. 우리는 root에 두기로 함.
</script>
</html>
```

<br/>
<br/>

# 3. React에서의 Events

- {on + 사용할 eventListener : () => 사용할 함수} 이렇게 사용 (hard 버전에서만)

<br/>

**코드(hard ver.)**

- const exam = React.createElement("root에 들어갈 HTML 태그(Element)", {props가 포함된 object}, "content")
  > {props가 포함된 object} -> (style, id, class, ,event listener, props(placeholder 등) 등 변경 가능) / property가 될 수가 있고, 그 properties를 갖는 object가 될 수도 있음.
- props로 event listener를 추가 할 수 있다는 너무나도 큰 장점을 가지고 있음. (React.js의 파워)

<br/>

```
<!DOCTYPE html>
<html>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>

<script>
    const root = document.getElementById("root");

    const span = React.createElement(
        "span",
        {
        onMouseEnter : () => console.log("mouse enter"),
        },
        "hello"
    );
    // element span에 property를 여기서 같이 생성할 수 있음. 예를 들어 class, id, content(내용)등

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
    /*
    <button id="btn">Click me</button>
    const button = document.getElementById("btn");
    const span = document.querySelector("span");
    button.addEventListener("click", handleClick);
    이 코드들을  한꺼번에 위처럼 표현이 가능함. ReactJS의 장점.
    */

    const div = React.createElement("div", null, [span, btn]);
    // element들을 하나씩 DOM.render에 넣어도 되지만, 위처럼 배열을 사용하여 element들을 한꺼번에 render 가능.

    ReactDOM.render(div, root);
    // ReactDOM은 span을 어디에 둘 것인지 알려줘야 함. 우리는 root에 두기로 함.
</script>
</html>
```

</br>
</br>

# 4. React의 기본

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
</br>

# 5. 컴포넌트 생성 방식

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

# 6. State

**State를 활용한 클릭 Counter**

- **(기초개념)** javaScript와 다른 점은 js는 body와 child인 span 부분 전체를 업데이트 하지만, ReactJS는 바뀐 부분만 업데이트 해줌.
  > 정말 중요한 부분 => 적은 부분을 수정 한다는 것은 그만큼 오류를 잡아내기도 쉽고 코드 전체가 아닌 부분을 수정하면 된다는 것.
- React.useState() = [data, function]
- useState는 하나의 Array => [data, data를 변경할 수 있는 function]

  > const a = [1, 2, 3]  
  > => const a[0] = 1, const a[1] = 2, const a[2] = 3  
  > => const [1, 2, 3] = a  
  > 셋 다 같은 것임.  
  > 따라서, const [data, setdata] = useState(초기값); 으로 배열을 정의해 줌.

  </br>

`방법 1. (변수 count가 바뀔 때마다 리렌더링 하는 방법 / 가장 좋은 방법 X)`

> count가 0인 시점에 최초 렌더링
> button을 눌러 countUp 함수를 호출해 count를 증가 시킬 때마다 리렌더링을 함.

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

> ReactJS 어플 내에서 데이터를 보관하고 자동으로 리렌더링을 하는 방법

```
  <script type="text/babel">
    const root = document.getElementById("root");

    function App() {
      const [count, setCount] = React.useState(0);
      // 이것의 구조는 array => [data, data를 바꿔줄 function] / 나는 data의 초기값을 0으로 설정
      // count = data의 초기값 / setCount = data를 변경하는 function

      const click = () => {
        setCount(count + 1);
        // 직전의 코드를 보면 알듯이, 여기에 rendering 해주는 함수를 추가하는 건 시스템상 너무 비효율적임.
        // useState의 data를 바꿔줄 function에선 리렌더링까지 함께 이루어지기 때문. 그래서 useState를 사용함.
      };

      return (
        <div>
          <h3>클릭 수 : {count}</h3>
          <button onClick={click}>Click!</button>
        </div>
      );
    }

    ReactDOM.render(<App />, root);
  </script>
</html>
```

</br>

**State Function**

- state를 바꾸는 방법은 2가지

  > **1.** setState로 원하는 값을 넣어주는 방법. (직접 할당)  
  > => setCount(1234567); 이런 것처럼

  > **2-1** 이전 값을 이용해서 현재 값을 계산해 내는 방법. (현재의 값을 활용)  
  > => setCount(count + 1); 이런 것처럼

  > **2-2** 이 방법이 제일 좋음 (함수 할당)  
  > 함수를 이용한 방법  
  > setState()엔 argument로 함수도 들어갈 수 있음  
  > => setCount((asd) => asd + 1); 이런 것처럼  
  > (asd = 현재의 값 / 아무거나 들어가도 됨)

  > 위의 2-1과 2-2 똑같이 현재의 state값으로 새로운 값을 계산하지만 이 방법이 더 안전함.  
  > 왜? => React에서 current가 확실한 현재의 값이라는 걸 보장하고 있기 때문

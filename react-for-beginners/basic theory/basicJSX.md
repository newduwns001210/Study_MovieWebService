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

```
<script src="//unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
{/* JSX 구문 내용 */}
</script>
```

- version별 ReactDOM사용법

```
18 버전 React에서 쓰는 방식
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
```

```
17 버전 React에서 쓰는 방식
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
```

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

 </br>

**기초코드**

```
<script type="text/babel">
    function App() {
      const [count, setCount] = React.useState(0);

      const click = () => {
        setCount((asdasd) => asdasd + 1);
      };

      return (
        <div>
          <h3>클릭 수 : {count}</h3>
          <button onClick={click}>Click!</button>
        </div>
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
  </script>
```

</br>

**Inputs and State (단위 변환 앱)**

- 분->시간 / 시간->분 / km->mile / kg->pound
- JS와 다른 JSX에서의 명령어 (production에서 말고 development에서)

  > html의 속성으로 for / class 등을 htmlFor / className 등으로 기재해야 함.  
  > 명령어가 바뀌어도 html이 읽어올 땐 html태그로 읽어옴.

- hour input에는 값을 입력할 수 없음

  > event listener가 없기 때문.
  > disabled 속성을 추가하는 것으로 입력창 자체를 고정시켜버림.

<br>

**단위변환기(분/시간)**

```
 <script type="text/babel">
    function App() {
      const [time, setTime] = React.useState(0);
      const [fliped, setFliped] = React.useState(false);

      const onChange = (event) => {
        setTime(event.target.value);
      };
      const reset = () => setTime(0);
      const flip = () => {
        reset();
        setFliped((flip) => !flip); // "!"는 부정명제 true->false / false->true
      };

      return (
        <div>
          <h1 className="converter">Converter(단위변환기)</h1>
          <div>
            <label htmlFor="minutes">Minutes</label>
            <input
              value={fliped ? time * 60 : time}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
              disabled={fliped}
            />
          </div>

          <div>
            <label htmlFor="hours">Hours</label>
            <input
              value={fliped ? time : time / 60}
              id="hours"
              placeholder="Hours"
              type="number"
              onChange={onChange}
              disabled={!fliped}
              // disabled => 입력창을 고정시켜버려 값을 입력할 수 없음. (클릭도 안돰.)
            />
          </div>

          <button onClick={reset}>초기화</button>
          <button onClick={flip}>전환</button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  </script>
```

<br>

**단위변환기(km/mile)**

```
<script type="text/babel">
    function DistanceConverter() {
      const [distance, setDistance] = React.useState(0);
      const [fliped, setFliped] = React.useState(false);

      const onChange = (event) => {
        setDistance(event.target.value);
      };

      const reset = () => setDistance(0);

      const flip = () => {
        reset();
        setFliped((value) => !fliped);
      };

      return (
        <div>
          <div>
            <label htmlFor="km">Km</label>
            <input
              value={fliped ? distance * 1.609 : distance}
              id="km"
              placeholder="Km"
              type="number"
              onChange={onChange}
              disabled={fliped}
            />
          </div>

          <div>
            <label htmlFor="mile">Mile</label>
            <input
              value={fliped ? distance : distance / 1.609}
              id="mile"
              placeholder="Mile"
              type="number"
              onChange={onChange}
              disabled={!fliped}
            />
          </div>

          <button onClick={reset}>초기화</button>
          <button onClick={flip}>전환</button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  </script>
```

<br>

**원하는 단위변환기 선택**

```
<script type="text/babel">
    function App() {
      const [index, setIndex] = React.useState("0");
      // 디폴트(기본) 값으로 number 0이 아닌 string 0 을 넣어줌.
      const onSelect = (event) => {
        setIndex(event.target.value);
      };
      return (
        <div>
          <h1>단위변환기</h1>
          <select value={index} onChange={onSelect}>
            <option value="0">Minutes & Hours</option>
            <option value="1">Km & Mile</option>
          </select>
          <hr />
          {index === "0" ? <TimeConverter /> : null}
          {index === "1" ? <DistanceConverter /> : null}
          {/* {}중괄호 안에는 JS코드를 넣을 수 있음 */}
          {/* index value에 따라서 UI가 변함 */}
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  </script>
```

<br>
<br>

# 7. Props

- 일종의 방식
- 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법 (부모 컴포넌트 data -> 자식 컴포넌트)

**사용 방식 & 코드**

- props는 객체
- props.property는 그냥 {property}처럼 사용할수 있다

<br>

```
<script type="text/babel">
    function Btn({ text, big }) {
      // props는 유일한 argument이자 object
      // App(부모 컴포넌트)에서 보낸 정보를 가지고있음 => props
      // {}중괄호 안에 받고 싶은 property를 적으면 argument를 굳이 적지 않아도 됨
      console.log(text);
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize: big ? 18 : 16,
          }}
        >
          {text}
        </button>
      );
    }
    // {props.asdf} => 부모 컴포넌트에서 받은 asdf라는 property를 받아서 text를 변경함
    // argument에 따라 편하게 변경 가능함
    // prop 기반으로 style 안에서 조건문(if else)를 사용할 수도 있음

    function App() {
      return (
        <div>
          <Btn text="Save Changes" big={true} />
          <Btn text="Continue" big={false} />
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  </script>
```

<br>

**React.memo() 사용 방법 & 사용 이유**

- 부모 컴포넌트의 changeValue={changeValue}는 html의 button 태그를 위한 이벤트리스너가 아님

  > 부모 컴포넌트에 어떤 무엇을 넣든간에 단지 prop이기에 적용이 되진 않음  
  > 부모 컨포넌트의 prop을 사용하기 위해선 자식 컴포넌트의 argument에 추가해 주어야 함

- 컴포넌트가 상태(state)를 바꾸면 컴포넌트 자체가 리렌더링 한다.

  > 하지만, 두번째 Btn은 상태가 바뀌지 않았다.  
  > 고로, 다시 리렌더링(다시 그릴 필요)가 없으니 React Memo를 사용할 것임

- React.memo(컴포넌트)를 사용하면 상태(state)가 변경된 컴포넌트만 리렌더링 된다.

  > 한마디로 특정 컴포넌트의 props가 변경되지 않는다면 다시 그릴(리렌더링) 할 필요가 없다는 것을 알려준 것임  
  > 이걸 하는 하는 이유는 실무에서 리렌더링 되는 컴포넌트가 많아질수록 속도가 느려짐

  <br>

```
<script type="text/babel">
    function Btn({ text, changeValue }) {
      console.log(text);
      return (
        <button
          onClick={changeValue}
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
          }}
        >
          {text}
        </button>
      );
    }

    const MemorizedBtn = React.memo(Btn);

    function App() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("변경");
      return (
        <div>
          <MemorizedBtn text={value} changeValue={changeValue} />
          <MemorizedBtn text="Continue" />
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  </script>
```

<br>

**Prop Type**

- https://unpkg.com/prop-types@15.7.2/prop-types.js 는 prop이 어떤 type을 받고 있는지 체크해줌

<br>

- props들의 type이 설정한 것과 맞지 않으면 콘솔창에 오류메세지가 뜸
- 필수적인 prop과 그에 맞는 propType을 갖고 있는지 확인하려면 .isRequired를 붙이면 됨
- argument에 fontSize가 아닌 fontSize=18 이런 식으로 넣으며 default 값을 설정할 수 있음 하지만 부모 컴포넌트에서 이미 prop으로 지정해 놓은 fontSize는 그대로 적용되고 fontSize라는 prop이 없는 컴포넌트에만 default값으로 설정됨

```
Btn.propTypes = {
      text: PropTypes.string,
      fontSize: PropTypes.number.isRequired,
    };
```

<br>
<br>

# 8. Effect

- state가 변화가 있을 때 모든 코드(컴포넌트)들이 다시 실행(리렌더링)되는데 이 과정이 불필요하거나 오류를 일으킬 수 있음.
- 특정 코드의 실행을 1번으로 제한하고 싶다는 것

**useEffect(first.argument, second.argument)**

- 첫번째 argument => 딱 한번만 실행시키고 싶은 코드(구문, 함수 등)
- 두번째 argument => 코드를 실행하고 싶은 변화의 기준을 넣어줌.(state => dependencies(대상) => react가 지켜봐야 할 것들)

<br>

**사용 예시 코드**

```
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("한번만 실헹됩니다.");
  }, []);

  useEffect(() => {
    if (counter >= 1) {
      console.log(counter, "번 클릭되었습니다.");
    }
  }, [counter]);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log(keyword, "을(를) 검색합니다.");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("keyword & counter가 작동합니다");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="검색어를 입력하세요."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click!</button>
    </div>
  );
}

export default App;
```

<br>

**CleanUp function**

- 많이 사용되진 않음
- 짧게 말해 요런 식
- return () => console.log("제거"); 이게 중요한거임

```
function Hello() {
  useEffect(() => {
    console.log("생성");
    return () => console.log("제거");
  }, []);
```

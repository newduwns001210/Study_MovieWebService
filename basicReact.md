1. ReactJS 설치 방법

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

---

<br/>

2. ReactJS로 Element 생성 방법 (hard)

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

---

<br/>

3. React에서의 Events

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

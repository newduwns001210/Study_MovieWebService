# ToDo List

```
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    // setToDo처럼 값만 보내는 것이 아닌 함수를 보내는 방법 => argument로 현재의 State를 보냄
    // ...currentArray는 이미 생성된 toDos Array
    // ...currentArray는 원래있는 Array의 Element를 가져온다는 function
    // JS에서는 새로운 toDo를 원래 toDos에 push(넣는)하는 방법이지만, React의 경우엔 State를 사용하여 배열에 추가 => (toDo)
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      {/* JSX에 JS 코드를 넣고 싶으면 {} 안에 넣으면 됨 */}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 적으세요."
        />
        <button>add ToDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, key) => (
          <li key={key}>{toDo}</li>
        ))}
        {/* 같은 컴포넌트의 list를 렌더링할 땐, key라는 prop을 넣어줘야 함 / 안 넣어주면 console에서 에러 남
            => map()의 두번째 argument는 index(number)가 key값으로 사용 가능 */}
        {/* map function 또한 JS임 / Array안의 Element들을 다 바꾸고 싶고, 새로운 Array를 가지고 싶을 때 사용 */}
        {/* Array.map()으로 실행 => map 안의 argument function은  모든 Element에 실행됨 */}
      </ul>
    </div>
  );
}

export default App;
```

<br>
<br>

# Coin Tracker

- useEffect에 API를 fatch하여 data를 받고 .then을 사용하여 받은 data로 State를 수정함
- loading이 true일 땐 loading 메세지가 뜨지만 loding이 성공한 이후에 나오는 select 구문을 {loading ? (로딩 되는 중 문구) : (로딩 성공 후 함수/문구)}
- title의 삼항연산자에 백틱과 $가 들어간 이유는 문자열 내부에 변수를 포함시키기 위해서

```
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [money, setMoney] = useState("");

  const onChange = (event) => setMoney(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(!loading);
        console.log(json);
      });
  }, []);
  // 아무것도 주시하고 있지 않으면(빈 배열) useEffect 코드는 한번만 실행됨
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${data.length})`}</h1>
      <input
        value={money}
        onChange={onChange}
        type="number"
        placeholder="가격을 입력하세요. (USD)"
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {data.map((data) => (
            <option>
              {data.name} ({data.symbol}) :{money / data.quotes.USD.price}{" "}
              {data.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;

```

<br>
<br>

# Movie App

- App.js : Routing하는 컴포넌트
- Home.js : Home 화면을 구현하는 코드를 가진 컴포넌트
- Movie.js : 부모 컴포넌트인 Home.js에서 prop을 받아 map을 구현해주는 자식 컴포넌트

- Array.map((아무거나) => 코드)는 Array의 모든 element들에게 코드를 적용시킴 (Array에게 적용시키는 함수 map())

- async-await 구문을 사용하여 .then 구문의 단점을 보완하고 사용하지 않음. => 편리함

- <li>구문에 key를 추가하여 고유값을 설정함

- Movie라는 자식 컴포넌트를 생성하여 부모 컴포넌트(movieWeb.js)로 부터 props의 정보를 받아옴

  > 부모 컴포넌트에서 보내주는 props는 내가 임의로 properties name을 명명할 수 있음 하지만, 무조건 데이터를 받아오는 코드는 똑같이 작성해줘야 함

<br>

**Router**

- 설치방법 : 터미널 열고 폴더에 들어가서 npm install react-router-dom
- 페이지 전환

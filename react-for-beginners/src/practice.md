**ToDo List**

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

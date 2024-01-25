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
    // ...currentArray는 이미 생성된 toDo들의 Array
    // ...currentArray는 원래있는 Array의 Element를 가져온다는 function
    // JS에서는 새로운 toDo를 원래 toDos에 push(넣는)하는 방법이지만, React의 경우엔 State를 사용하여 배열에 추가
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
    </div>
  );
}

export default App;

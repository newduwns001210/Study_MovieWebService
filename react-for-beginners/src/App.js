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

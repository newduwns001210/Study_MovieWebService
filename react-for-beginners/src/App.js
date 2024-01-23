import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("생성");
    return () => console.log("제거");
  }, []);
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((value) => !value);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

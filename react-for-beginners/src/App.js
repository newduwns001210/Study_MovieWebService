import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 이 구문을 import 해줘야함

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h2>hello</h2>} />
        <Route path="/movie/:random" element={<Detail />} />
        {/* /movie/:random 여기서 id 앞의 ":"가 중요함
        여기서 "random"은 변수명이기 때문에 어떻게 써도 상관없음 */}
        <Route path="/" element={<Home />} />
      </Routes>
      {/* Switch가 하는 일은 Route를 찾는 것 */}
      {/* Router -> Switch -> Route 순으로 감. 그리고 path="/
      을 해줌으로써 url에 "/"가 있다면 Home 컴포넌트를 가져와
      Home 화면으로 Routing되게 해줌 */}
    </Router>
  );
}

export default App;

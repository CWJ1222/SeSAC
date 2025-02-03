import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Practice from "./pages/Practice";
import {
  PropsType1,
  PropsType2,
  PropsType3,
} from "./components/lecture/PropsTypes";
import Container from "./components/lecture/Container";
import SetText from "./components/lecture/SetText";
import EventObj from "./components/lecture/EventObj";
import TodoList from "./components/lecture/TodoList";

function App() {
  return (
    <div>
      <h1>hello</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/lecture"
          element={<Lecture topic="React props" duration={60} />}
        />
        <Route path="/practice" element={<Practice />} />
      </Routes>

      <Container>
        {/* PropsTypes 컴포넌트 수정 */}
        <PropsType1 name="타입스크립트 props 예제" />
        <PropsType2 width="100px" height="100px" color="purple" />
        <PropsType3 width="150px" height="150px" text="Hello PropsType3" />
      </Container>

      <SetText />
      <EventObj />

      <TodoList />
    </div>
  );
}

export default App;

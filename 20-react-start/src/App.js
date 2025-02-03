// import ClassComp from "./ClassComp";
import IsCorrect from "./IsCorrect";
// import UseJSX from "./UseJSX";

const name = "로이";
const animal = "강아지";

const a = 8;
const b = 5;

function App() {
  return (
    <div>
      <div></div>
      {/* <UseJSX />
      <ClassComp /> */}
      <h2>
        제 반려 동물의 이름은 {name} 입니다.
        <br />
        {name}는 {animal}입니다.
      </h2>
      <IsCorrect />

      <br />
      <div>{a > b && `${a}이 ${b}보다 큽니다`}</div>
    </div>
  );
}

export default App;

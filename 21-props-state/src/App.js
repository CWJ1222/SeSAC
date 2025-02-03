import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
//export default 는 {}가 필요없다
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import ClassState2 from "./components/practice/ClassState2";
import FunctionState2 from "./components/practice/FunctionState2";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import FoodIntroduce from "./components/practice/FoodIntroduce";
import BestSeller from "./components/practice/BestSeller";
import PropsPractice3 from "./components/practice/PropsPractice3";
import HandlerEx from "./components/ex/HandlerEx";
import HandlerEx2 from "./components/ex/HandlerEx2";
import ChangeEmoji from "./components/ex/ChangeEmoji";
import HideHello from "./components/ex/HideHello";
import ChangeObj from "./components/ex/ChangeObj";
import EntirePractice from "./components/practice/EntirePractice";
import PropsMap from "./components/PropsMap";
import PropsMap2 from "./components/PropsMap2";
import Alphabet from "./components/Alphabet";
import MapPracOne from "./components/practice/MapPracOne";
import MapPractice2 from "./components/practice/MapPractice2";

function App() {
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 3 },
    { name: "pear", krPrice: 5000, number: 1 },
    { name: "apple", krPrice: 20000, number: 10 },
  ];

  const pororoObjArr = [
    {
      name: "뽀로로",
      age: "7",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "5",
      nickName: "공주님",
    },
    {
      name: "크롱",
      age: "4",
      nickName: "장난꾸러기",
    },
    {
      name: "크롱2",
      age: "4",
      nickName: "장난꾸러기",
    },
    {
      name: "크롱3",
      age: "4",
      nickName: "장난꾸러기",
    },
    {
      name: "크롱4",
      age: "4",
      nickName: "장난꾸러기",
    },
    {
      name: "크롱5",
      age: "4",
      nickName: "장난꾸러기",
    },
  ];
  return (
    <div>
      {/* <h2>props 사용</h2>
      <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />

      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        // fontColor="blue"
      />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4> */}

      {/* <h2>State 사용</h2>
      <h3>클래스형 state</h3>
      <ClassState />
      <h3>함수형 state</h3>
      <FunctionState />

      <h3>practice</h3>
      <ClassState2 />
      <br />
      <FunctionState2 /> */}

      {/* <h2>event</h2>
      <SyntheticEvent />

      <Counter /> */}
      {/* 
      <h1>좋아하는 음식 소개</h1>
      <FoodIntroduce color="gold" taste="단짠">
        <span style={{ color: "red" }}>이 색의 음식도 좋아합니다!</span>
      </FoodIntroduce>

      <hr />

      <BestSeller
        title={"소년이 온다"}
        author={"한강"}
        price={20000}
        type={"소설"}
      />

      <hr />

      <PropsPractice3
        text={"안녕하세요~~"}
        valid={() => console.log("success~")}
      />

      <hr />

      <HandlerEx />
      <hr />

      <HandlerEx2 />
      <hr />
      <ChangeEmoji />
      <hr />
      <HideHello />
      <hr />
      <div>
        {" "}
        <ChangeObj objArr={pororoObjArr} />{" "}
      </div> */}

      {/* <h2>실습문제!!</h2>
      <EntirePractice /> */}

      <h2>맵사용하기</h2>
      <PropsMap arr={arr} />
      <PropsMap2 arr={arr} />
      <PropsMap2 />

      <Alphabet />

      <hr />
      <hr />
      <hr />
      <MapPracOne />
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <MapPractice2 />
    </div>
  );
}

export default App;

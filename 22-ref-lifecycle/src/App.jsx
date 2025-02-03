import LifeCycleClass from "./components/LifecycleClass";
import LifeCycleFunc from "./components/LifecycleFunction";
import Practice1 from "./components/practice/Practice1";
import Practice2 from "./components/practice/Practice2";
import PracticeInputFocus from "./components/practice/PracticeInputFocus";
import PracticeRandom from "./components/practice/PracticeRandom";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";
import Test from "./components/Test";

function App() {
  return (
    <div>
      {/* <RefClass1 /> */}
      <hr />
      <hr />
      {/* <RefClass2 /> */}
      <hr />
      {/* <RefFunc1 /> */}
      <hr />
      {/* <RefFunc2 /> */}
      {/* <LifeCycleClass /> */}
      {/* <LifeCycleFunc /> */}
      {/* <Test /> */}
      {/* <Practice1 /> */}
      {/* <Practice2 /> */}
      <PracticeInputFocus />
      <hr />
      <PracticeRandom />
    </div>
  );
}

export default App;

import { useRef, useState } from "react";

//DOM요소를 선택하기 위한 ref
export function RefFunc1() {
  // 1. ref 객체 만들기
  const inputRef = useRef();

  // 3. ref.current 에 접근해서 원하는 작업 진행
  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };

  return (
    <div>
      {/* 2. 선택하고 싶은 태그에 ref 전달 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </div>
  );
}
//변수처럼
export function RefFunc2() {
  const ref = useRef(1);
  const [state, setState] = useState(1);
  let variable = 1;

  const plusRef = () => {
    ref.current += 1;
    console.log("ref.current", ref.current);
  };
  const plusState = () => {
    setState(state + 1);
    console.log("state", state);
  };
  const plusVar = () => {
    variable += 1;
    console.log("variable", variable);
  };

  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>Plus ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>Plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusVar}>Plus variable</button>
    </div>
  );
}

// 작동 방식:
// 	1.	useRef 사용:
// 	•	ref는 useRef(1)로 생성된 객체입니다. 초기값 1이 ref.current에 저장됩니다.
// 	•	ref.current는 렌더링과 무관하게 값을 변경할 수 있습니다.

// 	2.	useState 사용:
// 	•	state는 React 상태로, setState를 통해 값을 변경하면 컴포넌트를 재렌더링합니다.

// 	3.	variable 사용:
// 	•	variable은 일반 로컬 변수로, 값이 변경되어도 컴포넌트는 재렌더링되지 않습니다.

// 	4.	버튼 동작:
// 	•	Plus ref 버튼: ref.current 값을 증가시키고 콘솔에 출력합니다.
// 	•	Plus state 버튼: state 값을 증가시키고, 상태 변경으로 인해 컴포넌트를 재렌더링합니다.
// 	•	Plus variable 버튼: variable 값을 증가시키지만, 변경된 값은 콘솔에만 출력되며 UI에는 반영되지 않습니다.

// 주요 특징:
// 	•	ref.current:
// 	•	렌더링과 무관하게 값이 유지되며, 변경되더라도 컴포넌트는 재렌더링되지 않습니다.
// 	•	state:
// 	•	상태 변경 시 컴포넌트가 재렌더링되므로 변경된 값이 UI에 반영됩니다.
// 	•	variable:
// 	•	일반 변수로, 컴포넌트가 다시 렌더링될 때 초기화됩니다. 값 변경이 UI에 반영되지 않습니다.

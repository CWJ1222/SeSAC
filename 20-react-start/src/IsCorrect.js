import { Component } from "react";

const a = 3;
const b = 5;
const c = 8;

function myFunc() {
  alert(a + b === c ? "correct" : "incorrect");
}

export default class IsCorrect extends Component {
  render() {
    return (
      <div onClick={myFunc}>
        {a} + {b} 는 {c}인가요?
      </div>
    );
  }
}

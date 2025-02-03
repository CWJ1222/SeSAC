import React, { Component } from "react";

export default class PropsPractice3 extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h1>{text ? text : "전달 텍스트 없음"}</h1>
        <button onClick={valid}>콘솔메세지</button>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    char: "Hello World!",
  };
  render() {
    const { char } = this.state;
    return (
      <div>
        <p>{char}</p>
        <button
          onClick={() => {
            this.setState({ char: "Goodbye World!" });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}

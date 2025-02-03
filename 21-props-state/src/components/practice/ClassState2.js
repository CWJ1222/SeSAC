import React, { Component } from "react";

export default class ClassState extends Component {
  state = {
    num: 0,
  };
  render() {
    const { num } = this.state;
    return (
      <div>
        <p>현재 : {num}</p>
        <button
          onClick={() => {
            this.setState({ num: num + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ num: num - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

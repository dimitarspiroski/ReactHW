import React, { Component } from "react";
import "./App.css";
import Result from "./components/Result";
import Buttons from "./components/Buttons";
import { render } from "@testing-library/react";
import { directive } from "@babel/types";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }
  // Function that determines operations
  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    let checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  render() {
    return (
      <>
        <div className="calculator">
          <h1>Homework #1: Calculator</h1>
          <Result result={this.state.result} />
          <Buttons onClick={this.onClick} />
        </div>
      </>
    );
  }
}

export default App;

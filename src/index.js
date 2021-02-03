import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [leftInputValue, setLeftInputValue] = useState(0);
  const [rightInputValue, setRightInputValue] = useState(0);
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    let sum = leftInputValue + rightInputValue;
    setResult(sum);
  };

  const subtractNumbers = () => {
    let subtraction = leftInputValue - rightInputValue;
    setResult(subtraction);
  };

  const multiplyNumbers = () => {
    let product = leftInputValue * rightInputValue;
    setResult(product);
  };

  const divideNumbers = () => {
    let division = leftInputValue / rightInputValue;
    setResult(division);
  };

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={leftInputValue}
          onChange={(e) => setLeftInputValue(parseInt(e.target.value, 10))}
        />
        <input
          type="number"
          placeholder="0"
          value={rightInputValue}
          onChange={(e) => setRightInputValue(parseInt(e.target.value, 10))}
        />
      </div>

      <div className="btn-container">
        <button onClick={addNumbers}>Add Them!</button>
        <button onClick={subtractNumbers}>Subtract Them!</button>
        <button onClick={multiplyNumbers}>Multiply Them!</button>
        <button onClick={divideNumbers}>Divide Them!</button>
      </div>

      <h2>{Math.round(1000 * result) / 1000}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

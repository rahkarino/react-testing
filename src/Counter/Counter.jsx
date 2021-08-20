import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h3
        data-testid="counter"
        className={`${counter >= 100 ? "green" : ""}${
          counter <= -100 ? "red" : ""
        }`}
      >
        {counter}
      </h3>
      <button
        data-testid="sub-btn"
        onClick={() => {
          setCounter(counter - inputValue);
        }}
      >
        -
      </button>
      <input
        value={inputValue}
        data-testid="input"
        type="number"
        className="text-center"
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button
        data-testid="add-btn"
        onClick={() => {
          setCounter(counter + inputValue);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;

import { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "X") {
      value = "*";
    }
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
      setInput("");
    } else if (value === "C") {
      setInput("0");
      setResult("");
    } else {
      if (input === "0") {
        setInput(value);
      } else {
        setResult("");
        setInput(input + value);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[
          "C",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "X",
          "=",
          "-",
          "+",
          "/",
        ].map((label) => (
          <Button
            className="calculator-button"
            key={label}
            label={label}
            onClick={() => handleButtonClick(label)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

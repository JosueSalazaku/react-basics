import React, { useState } from "react";
import CalcDisplay from "./CalcDisplay";
import Buttons from "./Buttons";

function Calculator() {
  const [currentInput, setCurrentInput] = useState<string>("0");
  const [result, setResult] = useState<string>("");
  const [operation, setOperation] = useState<string | null>(null);
  const [previousInput, setPreviousInput] = useState<string>("");

  const buttonValue = [
    "C",
    "/",
    "*",
    "9",
    "8",
    "7",
    "6",
    "-",
    "5",
    "4",
    "3",
    "+",
    "2",
    "1",
    "0",
    "=",
  ];

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      resetCalc();
    } else if (value === "=") {
      performCalculation();
    } else if (["/", "*", "-", "+"].includes(value)) {
      setOperation(value);
      setPreviousInput(currentInput);
      setCurrentInput("0");
    } else {
      setCurrentInput((prevInput) =>
        prevInput === "0" ? value : prevInput + value
      );
    }
  };

  const performCalculation = () => {
    if (operation && previousInput) {
      const current = parseFloat(currentInput);
      const previous = parseFloat(previousInput);
      let result = 0;

      switch (operation) {
        case "/":
          result = previous / current;
          break;
        case "*":
          result = previous * current;
          break;
        case "-":
          result = previous - current;
          break;
        case "+":
          result = previous + current;
          break;
      }

      setResult(result.toString());
      setCurrentInput(result.toString());
      setOperation(null);
      setPreviousInput("");
    }
  };

  const resetCalc = () => {
    setCurrentInput("0");
    setResult("");
    setOperation(null);
    setPreviousInput("");
  };

  return (
    <div className="border border-white rounded-xl w-[600px] h-[900px] items-center justify-center">
      <CalcDisplay currentInput={currentInput} result={result} />
      <div className="buttons w-[600px] h-[800px] flex items-center justify-center py-8">
        <div className="w-[500px] h-[600px] grid grid-cols-4 gap-4 p-4 text-4xl">
          {buttonValue.map((value) => (
            <Buttons
              key={value}
              value={value}
              onClick={handleButtonClick}
              className={`h-40 w-40 flex items-center justify-center rounded-full ${
                value === "0"
                  ? "col-span-2 w-80"
                  : value === "C"
                  ? "col-span-2 w-80"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;

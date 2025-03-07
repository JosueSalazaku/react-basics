import React, { useState } from "react";
import CalcDisplay from "./CalcDisplay";
import Buttons from "./Buttons";

function Calculator() {

    const [currentInput, setcurrentInput] = useState<string>("0");
    const [result, setResult] = useState<string>("")

    const buttonValue = ["C", "=", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

    const handleButtonClick = (value: string) => {
        setcurrentInput((prevInput) => (prevInput === "0" ? value : prevInput + value))

        if (value === "C") {
            resetCalc();
        }
    }

    const resetCalc = () => {
        setcurrentInput("0");
    }

  return (
    <div className="border border-white rounded-xl w-[600px] h-[900px] items-center justify-center">
          <CalcDisplay currentInput={currentInput} result={result} />
          <div className="buttons">
        {buttonValue.map((value) => (
          <Buttons key={value} value={value} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
} 
 
export default Calculator;

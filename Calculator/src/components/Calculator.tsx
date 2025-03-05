import React, { useState } from "react";
import CalcDisplay from "./CalcDisplay";

function Calculator() {

    const [currentInput, setcurrentInput] = useState<string>("0");
    const [result, setResult] = useState<string>("")

    // const handleCurrentInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    // }


  return (
    <div className="border border-white rounded-xl w-[600px] h-[900px] items-center justify-center">
      <CalcDisplay currentInput={currentInput} result={result} />
    </div>
  );
}

export default Calculator;

import React from "react";
interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
}

function Buttons({ value, onClick }: ButtonProps) {
  return (
    <div className="flex flex-wrap">
      <button onClick={() => onClick(value)}>{value}</button>
    </div>
  );
}

export default Buttons;
